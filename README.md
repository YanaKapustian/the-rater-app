# theRATER

This web-site is a tool to rate and keep track of the books, movies or series that you've read or watched.

## Technologies:

Framework: `React` (SPA, React Router)

Typing: `Typescript`

Styles: `Styled components`

Store: `Local storage`

## Functionality:

1. Header. This is the place where you can see the logo (it leads to the main page) and the switcher to switch between light and dark theme.
2. Main page. Here's all the records that you've create and the button to create a new one.
3. Adding the record. The fields with labels to describe your experience. Every time you want to add a new record you'll see the basic template with 8 fields: title, author, rating, genre, year, description, cover (link), impression. The only field that's mandatory is Title. Note, that the field Cover (link) is the only field where you can place the link to the image and it'll be uploaded as a picture and not a plain text. It can be a book cover, a poster or anything else.
4. Changing the template. You can customize the template, add or delete certain fields. After making changes you can save the current template to use again later. Also you can upload the template that you've saved earlier by clicking on the name of it.
5. Record page. On the main page you'll see cards of the records you've created with partial information. To see full info click on the card. Also there are options of changing the record information and deleting it.

All the information is stored in Local Storage, so it'll be saved after closing the tab or the browser.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
