# Webpack React Starter Kit

Boilerplate for Webpack React projects.

### Installation

`yarn install`<br>

### Start Dev Server

`yarn dev`<br>

### Build for Production

`yarn build`<br>

### Features:

- ESNext Support via [babel](https://babeljs.io/) (v7)
- JavaScript Linting via [eslint](https://eslint.org/)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- Style Linting via [stylelint](https://stylelint.io/)
- [SVGR](https://react-svgr.com/) - Use SVGR and asset SVG in the same project using resourceQuery<br>
example:<br>
`import svg from './assets/file.svg?url' - load like asset SVG`<br>
`import Svg from './assets/file.svg' - load like React component`