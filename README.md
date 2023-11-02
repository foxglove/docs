# Foxglove docs

Hosted at [docs.foxglove.dev](https://docs.foxglove.dev).

Documentation for the [Foxglove observability platform](https://foxglove.dev) and [Foxglove API](https://docs.foxglove.dev/api).

![Foxglove app](/static/img/docs/introduction/hero.png)

### Contributing

Contribute edits by creating a feature branch with your proposed changes:

```bash
$ git clone https://github.com/foxglove/docs.git
$ cd docs/
$ git checkout -b your-feature-branch-name

# Make edits

$ git add .
$ git commit -m "Describe edits here"
$ git push origin your-feature-branch-name
```

Open a [pull request](https://github.com/foxglove/docs/pulls) in this repo – a Foxglove team member will approve before deploying the edits.

### Local development

Install dependencies:

```bash
$ yarn
```

Start the local development server:

```bash
$ yarn start
```

### Build

Generate static content into the `build` directory, to be served by any static contents hosting service:

```bash
$ yarn build
```

### Credits

Built using [Docusaurus 2](https://docusaurus.io/).
