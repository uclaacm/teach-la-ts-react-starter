# Your Teach LA Project Here!

![Production Build](https://github.com/uclaacm/teach-la-react-starter-barebones/workflows/Production%20Build/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
What's this? This is a template repository that sets up a few minor systems for a React micro-app, which is something that we've done frequently at Teach LA. Here's what it does:

- has the latest, dependabot-certified version of `create-react-app` and dependencies
- has GitHub Actions automatically set up for testing and linting builds
- has a default Dependabot config for `yarn` (with monthly audits)
- has Netlify redirects set up for multi-route SPAs
- Webpack support for SPAs
- Husky for Git Hooks
- ES-lint with typescript-airbnb config rules for our typescript files
- StyleLint with SASS guidelines for CSS, SASS, SCSS stylesheets.
- includes the [Contributor Covenant](https://www.contributor-covenant.org/) in `CODE_OF_CONDUCT.md`
- has a little bit of documentation for new people!
- Some extra stuff like changing the app logo to TeachLA's logo and setting up the `src` directory for further development!

## Overview

... explain what your project is here! What technology you used, who made it, and what it was for!

## Things You Should Do (and then delete this section)

Thanks for using our template! We hope this makes your life developing significantly easier.
Things you should do **after using this as a template**:

- [ ] find-and-replace `YOUR_PROJECT_URL_HERE` with your GitHub repo's project name in this README (it's in a few places, so use an editor!)
- [ ] set up [Netlify](https://www.netlify.com/) for this app - talk to jiin (@doubleiis02) if you need access to the Teach LA Netlify team.
- [ ] turn on "Automatically delete head branches" in GitHub `Settings > Options`
- [ ] in `Settings > Branches`, create a branch protection rule for `main` that requires PR reviews. You can optionally enable status checks, like passing `build`.
- [ ] update the README badges for the GitHub Actions and Netlify with the correct links!
- [ ] update and delete this documentation!
- [ ] contact Regina Wang (@reginawang99) or Matthew Nieva (@matthewcn56) with any questions about our quickstarter template set-up.

## FAQs

- Our webpack set-up currently accepts asset files with the following extensions: `png,svg,jpg/jpeg,gifmp3`

Code for it can be seen in line 22 `webpack.dev.js`

```
      {
        test: /\.(png|svg|jpe?g|gif|mp3)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
          },
        },
      },
```

If you want to add more assets like `.pdf`, `.wav`, etc, you can simply change our webpack.dev.js file to allow more filetypes with a `|` inside of the parentheses. (This is a regex statement that we're using to test different file types)

## Development Setup

We'll use a really common Node.js project workflow!
First, let's clone our repository, and install all of our yarn dependencies:

```

git clone https://github.com/uclaacm/YOUR_PROJECT_URL_HERE.git
cd YOUR_PROJECT_URL_HERE

```

If you don't have yarn installed...

```

npm install --global yarn

```

Then install our dependencies!

```

yarn add

```

(We handle the yarn and npm conflict issues within our `.gitignore` we set up so dw about it!)
To start our app, you just need to run `yarn run`!

```

yarn run

```

And to build our project for production (with CRA and Webpack's bundling with all that goodness),

```

yarn run build

```

## Contribution Workflow

Want to make a change? Great! Here are the steps:

1. Either make a new branch or a fork of this repository. `main` is a protected branch, **so you cannot push to it**.
2. Follow the instructions in "Development Setup" above. If you're on a fork, replace the URL with the fork's URL; if you're on a different branch, check it out using `git checkout`.
3. Make your changes!
4. **Before you push**, make sure your app builds with `npm run build`. If there are any errors, our CI/CD service will **reject your build**.
5. Once you're ready, stage and commit your changes!
6. Make a [pull request](https://github.com/uclaacm/YOUR_PROJECT_URL_HERE/pulls) with your changes, and let someone on your project team know. Netlify has a neat feature called "Deploy Previews" that give you a link to preview your changes; [see the blog post](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) for more info!
7. If your code passes code review, then we can merge it into `main`. Congratulations! If you'd like, it's now safe to delete your branch/fork.

## Helpful Commands

By running `yarn lint -fix` we can use the linter that we set-up to format our code the way that passes our style checks! Before you commit your changes and submit a pull request, make sure to run

```

yarn lint -fix

```

With Husky, we run yarn lint-staged automatically through before you commit! If you want to lint before commiting, you can run yarn lint -fix.

## Some More Helpful Tools

-Preloading

## Licensing & Attribution

This project and its code are licensed under the MIT License. You're free to use them however you wish, though we'd love to hear from you if you found this useful!

## Create React App Artifacts

_You can delete these if you want!_
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and specifically [the typescript template](https://create-react-app.dev/docs/adding-typescript/)!

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

```

```
