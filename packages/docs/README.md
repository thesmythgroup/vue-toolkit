# Docs

An example Vue site to showcase all the vue-toolkit packages.

## Getting started

Install root dependencies (in repo root):

```
npm ci
```

Install dependencies for all packages:

```
npm run bootstrap
```

Build all packages:

```
npm run build
```

Run the docs site:

```
cd ./packages/docs
npm start
```

### Amazon Cognito

To test `@vue-toolkit/aws-auth` locally with your own Cognito instance, add a `.env.local` file with the needed variables (see [`.env`](./env) for variables).
