---
title: Monitoring
description: Monitor your self-hosted Primary Site using Prometheus.
---

Monitor your self-hosted Primary Site using [Prometheus](https://prometheus.io).

### Configure Prometheus

The Primary Site services expose various application metrics that Prometheus can scrape and ingest.

The first option is to use one of the major cloud providers' managed integrations:

- GCP – [Google Cloud Managed Service for Prometheus](https://cloud.google.com/stackdriver/docs/managed-prometheus)
- AWS – [Amazon Managed Service for Prometheus](https://aws.amazon.com/prometheus/)
- Azure – [Azure Monitor Managed Service for Prometheus](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/prometheus-metrics-overview)

Alternatively, deploy Prometheus to your cluster directly using the directions below.

#### Create Helm repositories and namespace

Add Prometheus Helm repositories:

```bash
$ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
$ helm repo update
```

Create a Kubernetes namespace for Prometheus:

```bash
$ kubectl create namespace prometheus
```

#### Install Prometheus

Install Prometheus to your Kubernetes cluster:

```bash
$ helm install prometheus prometheus-community/prometheus -n prometheus
```

#### Configure pods for scraping

Locate the `streamService`, `siteController`, and `inboxListener` sections in your `values.yaml` file.

For each section, add a pod annotation under `deployment` instructing Prometheus to scrape the pod:

```yml
siteController:
  deployment:
    podAnnotations:
      prometheus.io/scrape: true
```

Upgrade your deployment with the new configuration. You may need to alter this command with your own namespace, Helm release name, and file path:

```bash
$ helm upgrade primary-site -f values.yaml --namespace foxglove
```

Prometheus will now scrape the metrics endpoints of the deployed services. To confirm this is working, forward the port of the Prometheus UI to view collected metrics:

```bash
$ kubectl -n prometheus port-forward service/prometheus-server 9090:80
```

Visit http://localhost:9090 and enter the query `{app="site-controller"}`. Executing that should show a list of metrics scraped from the edge controller.

#### Install custom metrics adapter

Finally, install the [Prometheus adapter for the Kubernetes custom metrics API](https://github.com/kubernetes-sigs/prometheus-adapter) using Helm.

This assumes you have installed Prometheus into the "prometheus" namespace. If you are using a different namespace, replace the second component of the URL accordingly.

```bash
$ helm install prometheus-custom-metrics-adapter prometheus-community/prometheus-adapter -n prometheus --set prometheus.url=http://prometheus-server.prometheus.svc.cluster.local
```

After a couple minutes, you should see custom metrics:

```bash
$ kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1
```

If the output contains metrics, you are ready to create an [autoscaler](/docs/primary-sites/self-hosting/autoscaling) on custom metrics.

### Monitor metrics

Once [Prometheus is configured](#configure-prometheus), the services expose useful application metrics for monitoring.

#### Stream service

- `stream_sync_ms` - Time between reception of request and establishment of connections to all immediately-required objects in storage (_histogram_)
- `time_to_first_message_ms` - Time between reception of request and first message written out (_histogram_)
- `files_request_latency_ms` - Time to request list of data files from Foxglove API (_histogram_)

#### Inbox listener

- `import_success_count` - Number of imports successfully processed (_counter_)
- `import_quarantine_count` - Number of imports quarantined (_counter_)
- `import_input_size_bytes` - Size of input files in bytes (_histogram_)
- `import_output_size_bytes` - Size of output files (processed data files) in bytes (_histogram_)
- `import_processing_time_seconds` - Processing time for imports in seconds (_histogram_)
- `output_file_count` - Number of output files per import (_histogram_)
- `input_message_count` - Number of messages per import (_histogram_)

#### Site controller

- `unleased_pending_import_count` - Number of backlogged pending imports for processing (_gauge_)
- `oldest_unprocessed_pending_import_age_secs` - Age of oldest unprocessed pending import in seconds (_gauge_)
