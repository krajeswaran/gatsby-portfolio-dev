# Portfolio for developers

My portfolio site made with gatsby and react. Forked from [Smakosh's](https://github.com/smakosh/gatsby-portfolio-dev) project. Major differences are,

- Pulls github pinned repo's as a graphql source for gatsby(instead of repos by stars)
- Externalized theme colors, other parameters
- Restyled for my portfolion needs: added summary description, added skills section, tweaked project settings
- Cleaned up, deleted unnecessary stuff

## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Netlify](https://netlify.com)
- A contact form protected by Google Recaptcha
- Can be deployed with one click
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)

## Prerequisites

[Yarn](https://yarnpkg.com/en/)

Please create a new file `.env.development` and put this env variable with your GitHub token

> If you're building locally, you will have to create a new file `.env.production` and put the same env variable

```bash
GITHUB_TOKEN=xxxxxxxxxx
```

When deploying on Netlify, you will have to set the private key as well

```bash
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx
```

I highly recommend you check this [repository](https://github.com/imorente/gatsby-netlify-form-example) for more details about the Google Recaptcha and Netlify forms

Copy `data/config.js.sample` to `data/config.js` and edit settings appropriately.

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
