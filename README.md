# Portfolio for developers

[![Netlify Status](https://api.netlify.com/api/v1/badges/d43853ed-10d4-4114-a64e-e4283d3677b2/deploy-status)](https://app.netlify.com/sites/krajeswaran/deploys)

My portfolio site made with gatsby and react. Forked from [Smakosh's](https://github.com/smakosh/gatsby-portfolio-dev) project. Major differences are,

- Restructured and restyled for my portfolion needs: added summary description, added skills section, tweaked project settings
- Pulls github pinned repo's as a graphql source for gatsby(instead of repos by stars)
- Portfolio is entirely config-driven. Externalized theme colors, other parameters
- Cleaned up, deleted unused gatsby/react plugins

## Features

- More minimal and fast! Uses webp for image rendering if browser is supported.
- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Netlify](https://netlify.com)
- Can be deployed with one click
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)

## Prerequisites

[Yarn](https://yarnpkg.com/en/)

Please create a new file `.env.development` and put this env variable with your GitHub token. Additionaly add your google analytics ID if you prefer.

> If you're building locally, you will have to create a new file `.env.production` and put the same env variable

```bash
GITHUB_TOKEN=xxxxxxxxxx
GA_ID=UA-xxxxxxxx
```

## Installing

Installing the dependencies

```bash
yarn
```

## Start the dev server

```bash
yarn start
```

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Credits

- [Smakosh's original portfolio project](https://github.com/smakosh/gatsby-portfolio-dev)

## Support

If you love this Gatsby template and want to support, please support smakosh the original creator!

[![Support smakosh on Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/smakosh)
