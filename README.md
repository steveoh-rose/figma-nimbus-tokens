# Figma Nimbus Tokens

This repository is a Figma plugin that allows us to create design tokens from scratch. The plugin uses Typescript and vite / esbuild to bundle and create the application.

```bash
.
├── public
├── plugin-src
│    ├── code.ts
│    └── tsconfig.json
├── ui-src
│    ├── App.tsx
│    ├── index.html
│    ├── main.tsx
│    ├── tsconfig.json
│    └── vite-env.d.ts
├── package.lock.json
├── package.json
├── rollup.config.js
└── tsconfig.json
```

## Run the build

Run `npm run build` to build the final plugin and generate the /dist folder

or alternatively run `npm run build:watch` to continuely watch for changes. You'll still need to run the plugin manually in Figma but you want have to build everytime you change code.
