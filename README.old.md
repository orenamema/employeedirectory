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
