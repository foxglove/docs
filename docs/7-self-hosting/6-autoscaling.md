---
title: Autoscaling
description: Autoscale self-hosted Primary Site services.
---

Use the following [HorizontalPodAutoscaler (HPA)](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) definitions to autoscale your self-hosted Primary Site services – be sure to revise configurations based on your specific workload.

### Stream service

```
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: stream-service
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: stream-service
  minReplicas: 1
  maxReplicas: 5
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 80
```

### Site controller

```
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: site-controller
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: site-controller
  minReplicas: 1
  maxReplicas: 5
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 80
```

## Inbox listener

Unlike the other two services, the inbox listener must be scaled on a custom metric. [Configure Prometheus](/docs/self-hosting/monitoring#configure-prometheus) to expose metrics to Kubernetes.

```yml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: inbox-listener
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: inbox-listener
  minReplicas: 1
  maxReplicas: 3
  metrics:
    - type: Object
      object:
        describedObject:
          kind: Namespace
          name: foxglove-aws
          apiVersion: v1
        metric:
          name: foxglove_site_controller_unleased_pending_import_count
        target:
          type: AverageValue
          averageValue: 2
```
