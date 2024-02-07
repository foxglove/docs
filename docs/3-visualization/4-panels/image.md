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
| Custom    | [`foxglove.RawImage`](/docs/visualization/message-schemas/raw-image)                                       |

### `CompressedImage`

| framework | schema                                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ROS 1     | [`sensor_msgs/CompressedImage`](https://docs.ros.org/en/api/sensor_msgs/html/msg/CompressedImage.html)                         |
| ROS 2     | [`sensor_msgs/msg/CompressedImage`](https://github.com/ros2/common_interfaces/blob/master/sensor_msgs/msg/CompressedImage.msg) |
| Custom    | [`foxglove.CompressedImage`](/docs/visualization/message-schemas/compressed-image)                                             |

### `CompressedVideo`

Record H.264 data using the Annex B format, avoiding B frames.

| framework | schema                                                                             |
| --------- | ---------------------------------------------------------------------------------- |
| Custom    | [`foxglove.CompressedVideo`](/docs/visualization/message-schemas/compressed-video) |

### `CameraCalibration`

Providing optional camera calibration data allows you to render 3D entities in the Image panel, or render images in the 3D panel. Calibration data not required to display image annotations if your images are already rectified.

Foxglove supports distortion models `plumb_bob` and `rational_polynomial`.

| framework | schema                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| ROS 1     | [`sensor_msgs/CameraInfo`](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/CameraInfo.html)                  |
| ROS 2     | [`sensor_msgs/msg/CameraInfo`](https://github.com/ros2/common_interfaces/blob/master/sensor_msgs/msg/CameraInfo.msg) |
| Custom    | [`foxglove.CameraCalibration`](/docs/visualization/message-schemas/camera-calibration)                               |

### `ImageAnnotation`

| framework | schema                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ROS 1     | [`visualization_msgs/ImageMarker`](http://docs.ros.org/en/noetic/api/visualization_msgs/html/msg/ImageMarker.html)                   |
| ROS 2     | [`visualization_msgs/msg/ImageMarker`](https://github.com/ros2/common_interfaces/blob/master/visualization_msgs/msg/ImageMarker.msg) |

### `ImageAnnotations`

| framework | schema                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| ROS 1     | [`foxglove_msgs/ImageMarkerArray`](https://github.com/foxglove/ros_foxglove_msgs/blob/main/msg/ImageMarkerArray.msg) |
| Custom    | [`foxglove.ImageAnnotations`](/docs/visualization/message-schemas/image-annotations)                                 |

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

## Troubleshooting video delay

You may see errors for `foxglove.CompressedVideo` topics stating that the frame being displayed is delayed relative to the most recent frame. Video decoding behavior can vary across platforms, and some platforms may experience delays while others do not. It is possible to configure your video stream to optimize for low-latency decoding, but it may be impossible to _guarantee_ that a video stream can be decoded with zero latency on all platforms.

Some tips on how configure the video encoding to best achieve low-latency decoding:

- Use the `BASELINE` profile for `h264` encoded streams. This profile is preferred because it does not support B frames. Profiles which support B frames may introduce decoding delay, even if the encoded stream doesn't actually contain B frames.
- Disable frame reordering on your encoder.
- Lower profile levels (`level_idc`) usually require smaller buffers, resulting in lower-latency decoding.
- If your encoder allows it, use a `bitstream_restriction` in the VUI parameters to limit the size of the buffer (`max_dec_frame_buffering`) and also disable frame reordering (`max_num_reorder_frames`).

System CPU load and power consumption may also contribute to decoding delays. Hardware-accelerated decoding is generally faster and more energy-efficient. You can check that your platform supports hardware-accelerated decoding by opening Google Chrome and entering `chrome://gpu` in the address bar. If you do not see `Video Decode: Hardware accelerated` on this page, but you believe that it should be supported, then you may need to take additional platform-specific steps to enable it.

These steps can help your platform achieve low-latency decoding, but there is no guarantee depending on the platform and device being used.

## Links and resources

- [Annotate camera images with image markers](https://foxglove.dev/blog/annotate-your-robots-camera-images-with-image-markers)
