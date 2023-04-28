# settings-company-and-shop

> Frontend for Settings: Company and Shop.

## Features

- Supports [these](https://nextjs.org/docs/basic-features/supported-browsers-features) browsers and features.

## Development

- Make sure your following requirements for npm and node are met:

| Package | Version |
| ------- | ------- |
| npm     | 6.14.x  |
| node    | 14.x.x  |

If you are using [nvm](https://github.com/nvm-sh/nvm), you can run `nvm use` in the root directory to install the correct version of node.

- Open your favorite Terminal and run these commands:

```bash
yarn install

yarn dev

# Local dev server will automatically starts on http://localhost:3000
```

## Available Scripts

In the project directory, you can run:

### `yarn clean`

Clean up cached or build folders.

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `yarn lint`

For running eslint on source code.

### `yarn lint:fix`

For fixing eslint errors.

### `yarn typecheck`

For running typescript typecheck.

### `yarn check`

For running lint and typecheck.

### `yarn build`

Builds the app for production to the `.next` folder.

### `yarn start`

It will start the production server on [http://localhost:3000](http://localhost:3000). Please ensure you ran `yarn build` first before running this command.
