---
title: Configure cloud credentials
description: Self-managed Primary Sites need additional cloud credentials to import data from its corresponding Foxglove Edge Sites.
---

Self-managed Primary Sites need additional cloud credentials to import data from its corresponding Foxglove Edge Sites.

## Google Cloud Platform (GCP)

Install a [Secret](https://kubernetes.io/docs/concepts/configuration/secret/) named
`gcp-cloud-credential` into the `foxglove` namespace. This secret should contain a single key `credentials.json` with the contents of json key file.

Use the `kubectl` command to set the secret from an existing `credentials.json` file.

```
kubectl create secret generic gcp-cloud-credential \
  -n foxglove \
  --from-file=./credentials.json
```

The Primary Site deployment will mount this secret into a volume and read the `credentials.json` file to initialize the GCP client.

## Amazon Web Services (AWS)

Authenticate using IAM Roles associated with service accounts or access key and secret credentials.

### Service accounts

Create your [IAM Roles](https://github.com/foxglove/terraform-examples/blob/main/primary-site/aws/README.md)
in AWS to have appropriate access to the `lake` and `inbox` buckets. Set up the EKS OIDC provider
to allow the roles assumed by the services.

Edit the `serviceAccount` section in the Helm chart, and add the IAM Role's Amazon Resource Name (ARN) as annotation for
the `inboxListener`, `streamService` and `garbageCollector` services:

```yaml
serviceAccount:
  enabled: true
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::xxxxxxxxxxxx:role/foxglove-inbox-listener-sa-role
```

### Access key

Install a [Secret](https://kubernetes.io/docs/concepts/configuration/secret/) named
`cloud-credentials` into the `foxglove` namespace. This secret should contain the credentials for your AWS key:

Check out the following example secret configuration file:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: cloud-credentials
type: Opaque
stringData:
  AWS_ACCESS_KEY_ID: AKIAIOSFODNN7EXAMPLE
  AWS_SECRET_ACCESS_KEY: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
  AWS_DEFAULT_REGION: us-west-2
```

Example application of a secrets file:

```shell
$ kubectl apply -f ./cloud-credentials-secret.yaml
```

#### S3-Compatible

The configuration is similar to AWS, but requires the addition of a service URL, and uses different environment variable names.

Install a [Secret](https://kubernetes.io/docs/concepts/configuration/secret/) named
`cloud-credentials` into the `foxglove` namespace. This secret should contain the credentials for your AWS key:

Check out the following example secret configuration file:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: cloud-credentials
type: Opaque
stringData:
  S3_COMPATIBLE_ACCESS_KEY_ID: AKIAIOSFODNN7EXAMPLE
  S3_COMPATIBLE_SECRET_ACCESS_KEY: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
  S3_COMPATIBLE_SERVICE_REGION: default
  S3_COMPATIBLE_SERVICE_URL: https://s3-compatible-service.example.com:6418
```

Example application of a secrets file:

```shell
$ kubectl apply -f ./cloud-credentials-secret.yaml
```

## Azure

Install a [Secret](https://kubernetes.io/docs/concepts/configuration/secret/) named
`cloud-credentials` into the `foxglove` namespace. This secret should contain the credentials for your Azure account:

Check out the following example secret configuration file:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: cloud-credentials
type: Opaque
stringData:
  AZURE_TENANT_ID: tenant-id
  AZURE_CLIENT_ID: client-id
  AZURE_CLIENT_SECRET: f02f3819-b046-4c9d-a5e8-853f16e5c687
  AZURE_INBOX_STORAGE_SERVICE_URL: ...
  AZURE_INBOX_STORAGE_ACCOUNT_NAME: ...
```

Example application of a secrets file:

```shell
$ kubectl apply -f ./cloud-credentials-secret.yaml
```
