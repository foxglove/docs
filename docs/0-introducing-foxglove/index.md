---
title: Introducing Foxglove
---
Foxglove is the leading observability platform for robotics developers.

## Data visualization

Foxglove Studio is an open source visualization and debugging tool for your robotics data. It is available in a variety of ways to make development as convenient as possible – it can be run as a standalone [desktop app](/download), accessed via [your browser](https://studio.foxglove.dev/), or even [self-hosted](https://github.com/foxglove/studio#self-hosting) on your own domain.

![foxglove studio](/img/og-image.jpeg)

Many native robotics tools (like those in the [ROS](https://www.ros.org/) ecosystem) are only supported on Linux, but the Studio desktop app works cross-platform on Linux, Windows, and macOS. Even if [your ROS stack](/tutorials/installing-ros1-on-ubuntu) is running on a different operating system, Studio can communicate with your robot without a hitch.

### Fully integrated

With Studio, all bells and whistles come included.

We’ve taken the dizzying array of tools that robotics development usually requires, and integrated them into one delightfully seamless developer experience.

By streamlining how you analyze, debug, and make sense of your robotics data, we hope you can spend less time setting up your tools, and more time focusing on what your robots are doing.

### Modular and flexible

Studio provides a rich suite of visualization and debugging panels – from interactive charts and 3D visualizations, to camera images and diagnostics feeds. Whether you’re shadowing your robot in real-time or debugging an issue in a recorded .bag file, these panels will help you tackle a diverse range of common robotics tasks.

These panels can then be configured and arranged within custom layouts to accommodate any project’s unique needs and workflows. By leveraging these modular building blocks, you can build your own robotics control center from scratch – just the way you want it. Our suite of panels is always growing.

Our [extensions](/docs/studio/extensions/getting-started) API also empowers you to create your own custom panels, tailored to your project's specific needs. You can contribute your extension to our [public extensions registry](https://github.com/foxglove/studio-extension-marketplace), or search it to install useful extensions contributed by your fellow roboticists.

By keeping Studio customizable and flexible, we hope to adapt to the ever-evolving landscape of robotics without missing a beat.

### Open source and community-driven

Open source software has played a huge role in helping us develop Foxglove Studio, and so we plan to keep our own software open source. We know that in building a tool that wholly reimagines robotics data visualization, our best collaborators would be our own users.

Our team exists to accelerate your robotics development, so we are constantly brainstorming new ways how our users can leverage Studio to rush to the bleeding edge of robotics. Everything about how we operate – from our [Slack](/slack) concierge, our actively monitored GitHub [issues](https://github.com/foxglove/studio/issues) and [discussions](https://github.com/orgs/foxglove/discussions), and comprehensive documentation – revolves around us helping you make your robot go.

We're also committed to [contributing our own software](/docs/studio/open-source-software) back to the community.

If you have questions, feature requests, or compliments to send our way, we are happy to receive them. Here are the many ways you can get in touch with our team:

- [Slack](/slack)
- GitHub [issues](https://github.com/foxglove/studio/issues) and [discussions](https://github.com/orgs/foxglove/discussions)
- [LinkedIn](https://www.linkedin.com/company/foxglovedev/)
- [Twitter](https://twitter.com/foxglovedev)
- [Email](mailto:contact@foxglove.dev)

## Data management

> Foxglove Data Platform is a scalable data management platform optimized specifically for storing and sharing robotic data.

Your robotics data should be easy to find, explore, and understand. By managing your data efficiently, you can significantly streamline your team's ability to debug and iterate on your robots.

To get started with Foxglove Data Platform, [sign in](/docs/data-platform/signing-in) to your Foxglove account and invite your team to start uploading data.

![hero](/img/docs/data-platform/hero.webp)

### Secure and robust infrastructure

With our world-class infrastructure that can scale from gigabytes to petabytes of storage, Foxglove Data Platform is your one-stop shop for organizing your most sensitive data. **Our convenient [web interface](https://console.foxglove.dev) and API allow you to upload data to a central team repository that your teammates can access securely.**

### Efficient search

As a team grows, so does its accumulated and duplicated data, making it increasingly difficult to know what information lives where and how to access it quickly.

Foxglove Data Platform makes exploring your data intuitive. **We strategically partition and index your data so that you can retrieve just the information you need at lightning speed.** This means you can locate events of interest by simply querying for a robot ID and time range.

### Easy sharing and visualization

Robotics teams must sift through an incredible volume of data at an equally incredible rate. To keep up, robotics developers may be forced to manually upload and download huge files or pass hard drives around the office every time they want to share data with a teammate.

**Having one central repository for your team's data makes it easy to know where your information lives**, regardless of who first uploaded it and who currently needs to access it.

Foxglove Data Platform also integrates seamlessly with Foxglove Studio. After locating the data you want to analyze, you can **stream it directly in Studio for instant visualization and debugging.**
