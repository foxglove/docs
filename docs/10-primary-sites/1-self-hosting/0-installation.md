---
title: Installation
description: Install and configure a self-hosted Primary Site.
---

Install and configure a self-hosted Primary Site.

### Prerequisites

- [Kubernetes](https://kubernetes.io/) cluster
- [Kubectl](https://kubernetes.io/docs/tasks/tools/) - Kubernetes command line tool
- [Helm](https://helm.sh/) - Kubernetes package manager

To deploy your Primary Site in the cloud, you will first need an account with one of the supported cloud providers (AWS, Azure, GCP). You may also choose to self-host a Kubernetes installation and an S3-compatible object store such as MinIO.

> We have tested the S3-compatible setup with MinIO. Other compatible services may work. Object creation events are required in order to process files from your inbox.

You will need to provision storage buckets, a Kubernetes cluster, and cloud credentials before installing the Primary Site.

Foxglove provides a set of [Terraform examples](https://github.com/foxglove/terraform-examples) to help with these initial provisioning steps in a supported cloud provider.

### Create storage buckets

Create two storage buckets for your Primary Site:

- `inbox` – For all file uploads
- `lake` – For processed and indexed versions of all files added to `inbox`

### Create Kubernetes cluster

Create a Kubernetes cluster to run your site workloads (e.g. processing inbox data, servicing data access requests from the lake) – we recommend doing this in the same region as your storage buckets, to reduce access latency and cost.

Create a `foxglove` namespace in your cluster:

```shell
$ kubectl create namespace foxglove
```

### Configure cloud credentials

Create a service account with read and write access to the storage buckets. The Kubernetes workloads will use this service account.

See [Configure cloud credentials](/docs/primary-sites/self-hosting/configure-cloud-credentials) for details on how to provide this credential to the deployment. This section also covers configuration of S3-compatible object storage.

### Create secret with site token

Find your Primary Site token on the ["Sites" settings page](https://console.foxglove.dev/settings/sites).

Install a [Secret](https://kubernetes.io/docs/concepts/configuration/secret/) named `foxglove-site-token` into the `foxglove` namespace containing your site token:

```shell
$ kubectl create secret generic foxglove-site-token --from-literal=FOXGLOVE_SITE_TOKEN='fox_st_...' --namespace foxglove
```

There are multiple other ways to create secrets that may be preferable. See [Create a Secret](https://kubernetes.io/docs/tasks/configmap-secret/managing-secret-using-kubectl/#create-a-secret) for more info.

### Install the release

Install your Primary Site using Helm.

#### Prepare a values file

Create a `values.yaml` file to configure the installation. You'll need to include a `storageProvider` (`aws`, `azure`, `google_cloud`, or `s3_compatible`) and the names of your `lake` and `inbox` buckets:

```yaml
globals:
  lake:
    storageProvider: google_cloud
    bucketName: foxglove-lake
  inbox:
    storageProvider: google_cloud
    bucketName: foxglove-inbox
```

Be sure to include any additional values required by your storage provider:

- **AWS** – Configure a region for requests:

```yaml
globals:
  aws:
    region: us-east-1
```

- **Azure** - Configure your storage service:

```yaml
globals:
  azure:
    storageAccountName: my-storage-account
    serviceUrl: "https://<resourcegroup>.blob.core.windows.net"
```

#### Install

Helm will install the Primary Site deployment to your current Kubernetes [context](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#context).

```shell
$ helm repo add foxglove https://helm-charts.foxglove.dev
$ helm repo update
$ helm upgrade --install foxglove-primary-site foxglove/primary-site \
    --values ./values.yaml  \
    --namespace foxglove \
    --create-namespace
```

View info about the deployment:

```shell
$ helm list -n foxglove
```

### Ingress for data access

The deployment installs an [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) which exposes a REST API endpoint for accessing available data.

To reach the ingress from outside the cluster you'll need to assign a DNS name and HTTPS endpoint. This HTTP endpoint must be reachable from your organization's network or any network you want to have access to the site data.

> How to assign a DNS name and HTTPS endpoint to the ingress is specific to your organization and
> cloud environment.

You can configure the ingress using your values file. Below are the default values.

```yaml
ingress:
  enabled: true
  className:
  annotations: {}
```

To completely disable the Ingress, set `ingress.enabled` to false. However, you must provide an Ingress for the site to function.

Some cloud providers require configuring annotations for HTTPS certificates. Here's an example values file for AWS.

```yaml
ingress:
  annotations:
    kubernetes.io/ingress.class: "alb"
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/backend-protocol: HTTP
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTPS":443}]'
    alb.ingress.kubernetes.io/certificate-arn: arn:aws:acm:us-west-1:xxxxxxxxxxxx:certificate/EXAMPLE-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Configure Foxglove

Once the site's ingress public URL is known, you can configure it on a Site page, linked from the ["Sites" settings page](https://console.foxglove.dev/settings/sites).

Under Site URL, enter the HTTPS URL you've assigned to the Ingress.

### Bucket push notification

The site inbox processor needs to know when new files are uploaded to the inbox bucket. To notify of
new uploads, configure a push notification to the foxglove data platform inbox-notifications
endpoint.

Configuring a push notification for new file uploads is specific to your cloud provider (or S3-compatible service).

The [Foxglove AWS Terraform examples](https://github.com/foxglove/terraform-examples) for cloud providers configure these resources for you. For manual setup, or for more information, see the documentation below.

- Azure: [https://learn.microsoft.com/en-us/azure/event-grid/blob-event-quickstart-portal#create-a-message-endpoint](https://learn.microsoft.com/en-us/azure/event-grid/blob-event-quickstart-portal#create-a-message-endpoint)
- GCP:
  [https://cloud.google.com/storage/docs/pubsub-notifications](https://cloud.google.com/storage/docs/pubsub-notifications)
- AWS: If you are using the [Foxglove AWS Terraform example](https://github.com/foxglove/terraform-examples/blob/main/primary-site/aws/README.md), this setup is done for you. You should see an SNS topic with an https subscription attached to the inbox bucket's `s3:ObjectCreated:*` events.
- MinIO: [https://min.io/docs/minio/linux/administration/monitoring/publish-events-to-webhook.html#minio-bucket-notifications-publish-webhook](https://min.io/docs/minio/linux/administration/monitoring/publish-events-to-webhook.html#minio-bucket-notifications-publish-webhook)

> Org admins can find the inbox notification endpoint on the [Sites settings page](https://console.foxglove.dev/settings/sites).
