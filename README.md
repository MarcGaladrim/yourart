# YourArt

Using these tools:

<div align="center">
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
  </a>
  <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite.js" />
  </a>
   <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind" />
  </a>

  <br />
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
  </a>
  <a href="https://eslint.org/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  </a>
  <a href="https://prettier.io/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/Prettier-182025?style=for-the-badge&logo=prettier" alt="Prettier" />
  </a>
  <br />
  <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="docker" />
  </a>
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="git" />
  </a>
</div>

## Available Scripts in `Makefile`

This app uses `Docker` and `docker-compose`, thus we use a Makefile:

- `all` (up & logs)
- `up` (start dev server)
- `exec` (exec shell in docker container)
- `re` (fclean & all)
- `reload` (down & all)
- `logs` (follow docker container logs)
- `stop` (stop container)
- `down` (down container)
- `ps` (print container status)
- `fclean` (remove images, dist, node_modules)

## Available Scripts in `package.json`

In the project directory, you can run:

### `yarn install`

### `yarn dev`

Runs the app in the development mode with [HMR](https://vitejs.dev/guide/features.html#hot-module-replacement).\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn serve`

The `vite preview` command will boot up a local static web server (at http://localhost:8080) that serves the files from `dist`

## Update packages

## `yarn upgrade-interactive --latest`

Upgrade all selected packages

## `yarn upgrade <package-name> --latest`

Upgrade given package
