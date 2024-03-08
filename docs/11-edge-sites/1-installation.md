---
title: Installation
description: Install and configure a Foxglove edge site.
---

Install and configure a Foxglove edge site.

### Prerequisites

- [Kubernetes](https://kubernetes.io/) cluster
- [Kubectl](https://kubernetes.io/docs/tasks/tools/) - Kubernetes command line tool
- [Helm](https://helm.sh/) - Kubernetes package manager

### Create a site

Create an edge site from the [Sites settings page](https://app.foxglove.dev/~/settings/sites):

- "Create site" – Name and create your edge site
- "Automatically delete recordings after (days)" – Enable garbage collection for your edge site; files past the expiration period are no longer eligible for import

You're now ready to set up your cluster.

### Configure cluster resources

Configure cluster resources required by the deployment – these are specific to your cluster and site setup.

Create a `foxglove` namespace in your cluster.

```shell
$ kubectl create namespace foxglove
```

#### Recording storage

Your deployment needs access to storage containing your edge recordings. You can use a Kubernetes Persistent Volume or any S3-compatible object storage to store your recordings.

If storing recordings in an S3-compatible object store, you must set these config values:

- `recordingStorage.provider`: Should be set to `s3_compatible`.
- `recordingStorage.bucketName`: The bucket name where recordings will be stored.
- `recordingStorage.s3CompatibleServiceUrl`: The URL of your S3-compatible service.
- `recordingStorage.s3CompatibleServiceRegion`: The region of your service. If your service is not
  configured with a region, leave this unconfigured.

Configure credentials for your edge site to access these recordings.

Install a [Secret](https://kubernetes.io/docs/concepts/configuration/secret/) named `recording-storage-credentials` into the `foxglove` namespace. This secret should contain an HMAC ID/secret pair to access your S3-compatible object store.

Check out the following example secret configuration file:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: recording-storage-credentials
type: Opaque
stringData:
  RECORDING_STORAGE_S3_COMPATIBLE_ACCESS_KEY_ID: AKIAIOSFODNN7EXAMPLE
  RECORDING_STORAGE_S3_COMPATIBLE_SECRET_ACCESS_KEY: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

##### Persistent Volume

If storing recordings in a Persistent Volume, the `recordingStorage.provider` config value should be left unset. You will need a pre-configured [Persistent Volume Claim](https://kubernetes.io/docs/concepts/storage/persistent-volumes/).

The default claim name is `edge-controller-storage-claim` however you can override this with the `edge_controller.storageClaim` config value.

Example claim manifest:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: edge-controller-storage-claim
spec:
  accessModes:
    - ReadWriteMany
  storageClassName: "..."
  volumeName: your-volume-name
  resources:
    requests:
      storage: ...
```

#### Index Storage

You will need a pre-configured Persistent Volume Claim for storing database data.
The default claim name is `edge-controller-index-claim` however you can override this with the `edge_controller.indexClaim` config value.

The index claim should be backed by block storage rather than network storage, for optimal performance.

Example claim manifest:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: edge-controller-index-claim
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: "..."
  volumeName: your-volume-name
  resources:
    requests:
      storage: ...
```

### Create secret with site token

Install a [Secret](https://kubernetes.io/docs/concepts/configuration/secret/) named `foxglove-site-token` into the `foxglove` namespace containing your site token:

```shell
$ kubectl create secret generic foxglove-site-token --from-literal=FOXGLOVE_SITE_TOKEN='fox_st_...' --namespace foxglove
```

There are multiple other ways to create secrets that may be preferable. See [Create a Secret](https://kubernetes.io/docs/tasks/configmap-secret/managing-secret-using-kubectl/#create-a-secret) for more info.

Additionally, your edge site will need cloud credentials to import data to the self-hosted Primary Site. See [Configure cloud credentials](/docs/edge-sites/configure-cloud-credentials) for more details.

### Install the release

Install your Foxglove edge site deployment to your current Kubernetes [context](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#context) using Helm.

#### Prepare a values file

Create a `values.yaml` file to configure the installation. You'll need your edge site's site token, which can be found on the [Sites settings page](https://app.foxglove.dev/~/settings/sites), and the name of your `inbox` bucket.

Accepted values for `provider` are: `aws`, `azure`, or `google_cloud`.

```yaml
globals:
  upload:
    provider: azure
    bucketName: foxglove-inbox
```

#### Install

```shell
$ helm repo add foxglove https://helm-charts.foxglove.dev
$ helm repo update
$ helm upgrade --install foxglove-edge-site foxglove/edge-site \
    --values ./values.yaml  \
    --namespace foxglove \
    --create-namespace
```

To view info about the deployment, run `$ helm list -n foxglove`.

To test that the service is up, forward the service port to your machine with `$ kubectl port-forward -n foxglove service/edge-controller 8888:8888` and open `http://localhost:8888/v1/liveness`.

### Create an Ingress

The edge controller exposes a REST API service (`edge-controller`) for notifications of new
recordings. To access this API outside of your cluster, you must create an
[Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/).

> The edge site service name is `edge-controller` and is available on TCP port 8888.

Visit `http://<cluster ip>:<port>/v1/liveness` in a web browser to confirm connectivity to the edge controller service via the Ingress.

### Next steps

To add recordings to your site, see [Manage Data](/docs/edge-sites/manage-data).
