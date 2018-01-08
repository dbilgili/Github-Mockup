# GitHub Mockup with React

This is a GitHub Mockup design implemented in React/Redux as an SPA.

As the GraphQL client to communicate with GitHub's API V4, Apollo Client was used.

Visit the [page](https://dbilgili.github.io/githubmockup/#/) for a working demo.

In order to test it, make sure that you have NodeJS installed on your computer. Then, just clone the repository and run `npm install` to install required modules and then you can run `npm start` to initialize a local server to test the project.

You can build the project for product by simply running the `npm run build` command. Make sure that you have set the __homepage__ correctly in the _package.json_ file.

## Overview

This GitHub Mockup shows the last 24 repositories for the given search query. Homepage randomly picks one keyword from an hardcoded list and shows the repositories in the form of a card.

Hovering over the card reveals the keywords of the repository, if there is any.

Upon clicking repository name a modal appears. There you can visit the actual repository page on GitHub or you can go to user page.

User page lists the last 15 repositories of the user at most.

Search bar also shows the last 24 repositories matching the query.

The design is inspired by [Dribbble](https://dribbble.com) and completely responsive.

__Software Stack:__ ReactJS, Redux, Apollo Client, SASS

## Future Implementations

- Infinite scrolling by using `fetchMore` feature of Apollo Client.
- Option to search for user accounts.
- Displaying `README` markdown content for the description section of the modal.
