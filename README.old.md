# EmployeeDirectory - React

## Introduction
I have created an employee directory with React.This project required that I break up the application's UI into components, manage component state, and respond to user events.This application lets the user view its entire emplloyee directory all at once therefore having quick access to information.

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

![alt text](https://github.com/orenamema/EmployeeDirectory/raw/master/assets/images/.gif)

## Code

````Javascript
searchemp=(empname) =>{
        var employeesrec=this.state.employees
        var found = false
        var searchdata = []
        for(let i=0; i<employeesrec.length; i++){
            if (empname.toLowerCase() == employeesrec[i].name.toLowerCase()){
                found = true
                searchdata.push(employeesrec[i])
            }
        }
        if (found){
            this.setState({
                employees:searchdata
            })
        }
        else{
            this.setState({
                employees:[{
                    name: "employee not found"
                }]
            })
        }
    }
    render(){
        var rec = this.state.employees
        return(
````

The code above is the function that allows the user to search for an employee in the directory. While searching for an employee that is not in the directory it returns employee not found. But if the employee is in the directory it returns that employee's profile.

## Learning Points

`React`

## Author

**Oren Amema**

* [Github](https://github.com/orenamema)
* [LinkedIn](https://www.linkedin.com/in/oren-amematekpo-b7a12b13)
* [Portfolio](https://orenamema.github.io/UpdatedPortfolio/)
