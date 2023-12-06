---
title: Image
description: Display raw and compressed images, as well as compressed videos, with 2D annotations like text labels, circles, and points. Superimpose 3D markers for additional context.
---

Display raw and compressed images, as well as compressed videos, with 2D annotations like text labels, circles, and points. Superimpose 3D markers for additional context.

![image panel](/img/docs/visualization/panels/image/panel.jpeg)

### Supported encodings

| Raw images              | Compressed images | Compressed videos |
| ----------------------- | ----------------- | ----------------- |
| `8UC1`                  | `webp`            | `h264`            |
| `8UC3`                  | `jpeg`            |                   |
| `16UC1`                 | `jpg`             |                   |
| `32FC1`                 | `png`             |                   |
| `bayer_bggr8`           |                   |                   |
| `bayer_gbrg8`           |                   |                   |
| `bayer_grbg8`           |                   |                   |
| `bayer_rggb8`           |                   |                   |
| `bgr8`                  |                   |                   |
| `bgra8`                 |                   |                   |
| `mono8`                 |                   |                   |
| `mono16`                |                   |                   |
| `rgb8`                  |                   |                   |
| `rgba8`                 |                   |                   |
| `uyvy` or `yuv422`      |                   |                   |
| `yuyv` or `yuv422_yuy2` |                   |                   |

## Supported messages

To use this panel, your data source must provide messages conforming to [3D marker message types](/docs/visualization/panels/3d#message-schemas) or one of the following supported schemas.

### `RawImage`

| framework | schema                                                                                                     |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| ROS 1     | [`sensor_msgs/Image`](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/Image.html)                  |
| ROS 2     | [`sensor_msgs/msg/Image`](https://github.com/ros2/common_interfaces/blob/master/sensor_msgs/msg/Image.msg) |
| Custom    | [`foxglove.RawImage`](/docs/visualization/message-schemas/raw-image)                                                     |

### `CompressedImage`

| framework | schema                                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ROS 1     | [`sensor_msgs/CompressedImage`](https://docs.ros.org/en/api/sensor_msgs/html/msg/CompressedImage.html)                         |
| ROS 2     | [`sensor_msgs/msg/CompressedImage`](https://github.com/ros2/common_interfaces/blob/master/sensor_msgs/msg/CompressedImage.msg) |
| Custom    | [`foxglove.CompressedImage`](/docs/visualization/message-schemas/compressed-image)                                                           |

### `CompressedVideo`

Record H.264 data using the Annex B format, avoiding B frames.

| framework | schema                                                                             |
| --------- | ---------------------------------------------------------------------------------- |
| Custom    | [`foxglove.CompressedVideo`](/docs/visualization/message-schemas/compressed-video) |

### `CameraCalibration`

Must be publishing `CameraCalibration` messages for the selected camera to display its corresponding 2D and 3D annotations.

Foxglove currently only supports `plumb_bob` and `rational_polynomial` for the `distortion_model` field value.

| framework | schema                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| ROS 1     | [`sensor_msgs/CameraInfo`](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/CameraInfo.html)                  |
| ROS 2     | [`sensor_msgs/msg/CameraInfo`](https://github.com/ros2/common_interfaces/blob/master/sensor_msgs/msg/CameraInfo.msg) |
| Custom    | [`foxglove.CameraCalibration`](/docs/visualization/message-schemas/camera-calibration)                                             |

### `ImageAnnotation`

| framework | schema                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ROS 1     | [`visualization_msgs/ImageMarker`](http://docs.ros.org/en/noetic/api/visualization_msgs/html/msg/ImageMarker.html)                   |
| ROS 2     | [`visualization_msgs/msg/ImageMarker`](https://github.com/ros2/common_interfaces/blob/master/visualization_msgs/msg/ImageMarker.msg) |

### `ImageAnnotations`

| framework | schema                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| ROS 1     | [`foxglove_msgs/ImageMarkerArray`](https://github.com/foxglove/ros_foxglove_msgs/blob/main/msg/ImageMarkerArray.msg) |
| Custom    | [`foxglove.ImageAnnotations`](/docs/visualization/message-schemas/image-annotations)                                               |

## Settings

### General

| field                | description                                                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Topic**            | Camera image or video topic to display                                                                                                                                         |
| **Calibration**      | Calibration topic to use for distortion and 3D markers                                                                                                                         |
| **Sync annotations** | Display images and 2D annotations only when their messages' timestamps match. Newly received 2D annotation messages will be buffered until a matching set can be displayed.    |
| **Flip horizontal**  | Flip image horizontally over a vertical axis                                                                                                                                   |
| **Flip vertical**    | Flip image vertically over a horizontal axis                                                                                                                                   |
| **Rotation**         | Rotate image by 90°, 180°, or 270°                                                                                                                                             |
| **Color mode**       | <ul><li><b>Color map</b> – Pre-defined color palette</li><li><b>Gradient</b> – Smooth transition between two custom colors</li></ul>                                           |
| **Color map**        | Only shown if "Color mode" is set to "Color map".<br/><br/>For mapping `mono16` and `16UC1` image values to colors:<ul><li>"Turbo" (Google)</li><li>"Rainbow" (RViz)</li></ul> |
| **Gradient**         | Only shown if "Color mode" is set to "Gradient".<br/><br/>Specifies gradient color values for `mono16` and `16UC1` images.                                                     |
| **Value min**        | Minimum scaling value for `mono16` and `16UC1` depth images (default: 0).                                                                                                      |
| **Value max**        | Maximum scaling value for `mono16` and `16UC1` depth images (default: 10000).                                                                                                  |

### Scene

| field                          | description                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------ |
| **Render stats**               | Display rendering performance statistics in panel corner                                   |
| **Background**                 | Color of background behind the image                                                       |
| **Label scale**                | Size of text labels                                                                        |
| **Ignore COLLADA `<up_axis>`** | Ignore the `<up_axis>` tag in COLLADA files                                                |
| **Mesh up axis**               | Direction of “up” when loading meshes (STL, OBJ) without orientation info ("Y-up", "Z-up") |

### Image annotations

2D image annotation marker topics to display.

### Transforms

List of transform messages to display.

See the [3D panel docs](/docs/visualization/panels/3d#transforms-2) for more information on possible settings.

### Topics

List of [3D marker topics](/docs/visualization/panels/3d#topics) to superimpose on the image.

### Custom layers

See the [3D panel docs](/docs/visualization/panels/3d#custom-layers) for more information on possible settings.

## User interactions

Right-click on the image to download it as a PNG file.

![download as png](/img/docs/visualization/panels/image/download.webp)

Click any displayed image marker to view its details.

![marker details](/img/docs/visualization/panels/image/marker-details.webp)

Scroll to zoom, and drag to pan. Annotations will re-render on zoom to remain sharp.

## Shortcuts

- Scroll – Zoom in and out

## Troubleshooting Video Delay

You may see delay errors for `foxglove.CompressedVideo` topics saying that the frame being displayed could be X number of frames behind the most recent frame. What this means is that the video decoder that's being needs to fill up an internal buffer before it starts returning decoded frames. This could due to the configuration of the video stream, but whether this behavior occurs is very inherent to the decoder on your platform and its capabilities. On some platforms achieving zero latency decoding could be impossible to guarantee, but there are ways to configure your video stream to give a best-effort attempt at achieving low-latency when decoding.

Here are some tips on how configure the video encoding to best achieve low-latency decoding:
 - Encoder configuration could require an internal buffer for decoding. This _can_ happen if your stream uses a profile which supports B frames, even if you don't use them. We recommend the `BASELINE` profile for `h264` encoded streams because it does not support B frames.
 - Disable frame reordering on your encoder.
 - Lower profile levels (`level_idc`) usually have smaller buffers. This would result in a lower-latency decoding.
 - If your encoder allows it, use a `bitstream_restriction` in the VUI parameters to limit the size of the buffer (`max_dec_frame_buffering`) and also disable frame reordering (`max_num_reorder_frames`).

Another possibility why this might be happening is because of decoder responding to high-CPU load or energy considerations along with the use of software-accelerated decoding (CPU based). You might want to check that hardware decoding is active and/or supported on your platform. Hardware-accelerated decoding is generally faster, and more energy efficient. You can see whether it's disabled by going to `chrome://gpu` in your chrome address bar. If you do not see `Video Decode: Hardware accelerated`, then you will want to look into seeing if decoder hardware acceleration is supported for your platform, and if it is, take the platform-specific steps to enable it.

Again, due to the decoder behavior being inherent to your platform and device it is not a guarantee that decoding will be low latency, but these are things you can do to allow your platform to give a best effort at low-latency decoding.

## Links and resources

- [Annotate camera images with image markers](https://foxglove.dev/blog/annotate-your-robots-camera-images-with-image-markers)
