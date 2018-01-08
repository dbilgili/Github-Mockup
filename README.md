# GitHub Mockup with React

This is a GitHub Mockup design implemented in React/Redux as an SPA.

As the GraphQL client to communicate with GitHub's API V4, Apollo Client was used.

Visit the [page](https://dbilgili.github.io/githubmockup/#/) for a working demo.

In order to test it, make sure that you have NodeJS installed on your computer. Then, just clone the repository and run `npm install` to install required modules and then you can run `npm start` to initialize a local server to test the project.

You can build the project for production by simply running the `npm run build` command. Make sure that you have set the __homepage__ correctly in the _package.json_ file.

__Note: You should have a personal access token generated to able to access the GitHub API.__

Inside `/src/index.js`, you should replace `YOUR_TOKEN` with your actual token.

    localStorage.setItem("token", "YOUR_TOKEN");

For more details, visit the [GitHub Documentation](https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql) page.

## Overview

This GitHub Mockup shows the last 24 repositories for the given search query. Homepage randomly picks one keyword from a hardcoded list and shows the repositories in the form of a card.

Hovering over the card reveals the keywords of the repository if there is any.

Upon clicking repository name, a modal appears. There you can visit the actual repository page on GitHub or you can go to the user page.

User page lists the last 15 repositories of the user at most.

Search bar also displays the last 24 repositories matching the query.

The design is inspired by [Dribbble](https://dribbble.com) and completely responsive.

__Software Stack:__ ReactJS, Redux, Apollo Client, SASS

## Future Implementations

- Infinite scrolling by using `fetchMore` feature of Apollo Client.
- Option to search for user accounts.
- Displaying `README` markdown content for the description section of the modal.
- Workaround for `BrowserRouter` with static server for pretty URLs.
