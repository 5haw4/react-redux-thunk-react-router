# Frontend Boilerplate - ReactJS, Redux & React Router

Frontend boilerplate using ReactJS, Redux (state management), react-router (frontend router for react), node-sass (SCSS support) and react-icons (multiple icon libraries combined into one).

## Libraries:
- [redux](https://www.npmjs.com/package/redux) - state container
- [react-redux](https://www.npmjs.com/package/react-redux) - binder for react and redux
- [redux-thunk](https://www.npmjs.com/package/redux-thunk) - async actions for redux (redux middleware)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - frontend navigation
- [node-sass](https://www.npmjs.com/package/node-sass) - SCSS support
- [react-icons](https://www.npmjs.com/package/react-icons) - multiple icon libraries in one
- [create-react-app](https://www.npmjs.com/package/create-react-app) - quick start boilerplate for SPA in ReactJS

## Project Structure:
    .
    ├── ...
    ├── public
    ├── src
    │   ├── components      //reusable components
    │   ├── pages           //all the pages in the web app
    │   ├── store
    │   │   ├── actions     //redux actions
    │   │   ├── reducers    //redux reducers
    │   │   └── types       //dispatch types
    │   ├── styles
    │   │   ├── components  //component styles
    │   │   ├── pages       //page styles
    │   │   └── index.scss  //root style included in all pages
    │   ├── App.js
    │   └── index.js
    └── ...

## Quick Start
1. Run ```npm install``` to install the dependencies
2. Run ```npm start``` to start the development server
3. Go to ```localhost:3000``` and browse the react web app