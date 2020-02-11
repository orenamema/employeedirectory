# EmployeeDirectory - React

## Introduction
I have created an employee directory with React.This project required that I break up the application's UI into components, manage component state, and respond to user events.This application lets the user view its entire employee directory all at once therefore having quick access to information. The user will be able to filter by name, phone, email and DOB.

## Acceptance Criteria

Given a table of random users, when the user loads the page, a table of employees should render. 
The user should be able to:

  * Sort the table by at least one category
  * Filter the users by at least one property.

## Technology Used
* [React](https://reactjs.org/)
* [Nodejs](https://nodejs.org/en/)
* [Javascript](https://www.w3schools.com/js)
* [CSS](https://www.w3schools.com/css/)
* [HTML](https://www.w3schools.com/html/)

## Application

![alt text](https://github.com/orenamema/employeedirectory/raw/master/public/images/dir.gif)

To access the application you will need to do a NPM Start in the Terminal
Here is a link to the [application](https://orenamema.github.io/employeedirectory/)

## Code

````Javascript

  componentDidMount =()=>{

    Api.getusers().then(json => {
        let rows = [];
        json.results.forEach(item => rows.push({
          name: `${item.name.first} ${item.name.last}`,
          email: item.email,
          image: [<img src={item.picture.thumbnail} className="img-fluid" class="rounded-circle" alt=""/>], //
          phone: item.phone,
          DOB: item.dob.date.substring(0, 10),
        }));
        console.log(rows);
        this.setState({ rows });
      })
      .catch(err => console.error(err));
    
  }
````
The code above highlights how the row are created and how I've pulled the data from the Api with the Api.getusers function. I later added the necessary items to the table with json.results.forEach which updates the name, email,image, phone number and DOB.


## Learning Points

`React`

## Author

**Oren Amema**

* [Github](https://github.com/orenamema)
* [LinkedIn](https://www.linkedin.com/in/oren-amematekpo-b7a12b13)
* [Portfolio](https://orenamema.github.io/UpdatedPortfolio/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
