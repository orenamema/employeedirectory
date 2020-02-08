import React from "react";
import Api from "../utils/Api";
import Records from "./Record"
class Datastore extends React.Component {
    state = {
employees:[]
    }
    componentDidMount =()=>{
        let userdata = []
        let employeedata = ""
        Api.getusers().then(results=>{
            // console.log (results.data.results)
            for(let i=0; i<results.data.results.length; i++){
                 employeedata= {
                    name: results.data.results[i].name.first,
                    email: results.data.results[i].email,
                    image: results.data.results[i].picture.large,
                    phone: results.data.results[i].phone,
                    DOB: results.data.results[i].dob.date,
                }
                console.log (employeedata)
                userdata.push(employeedata)
            }
            this.setState({
                employees:userdata
            },() =>{ 
            console.log(this.state.employees)
            })
        })
    }
    render(){
        var rec = this.state.employees
        return(
<div>
<h1>
    Hello world
</h1>
    
   {rec.map((data, i) => ( 

        <Records
        name = {data.name}
        email = {data.email}
        image = {data.image}
        phone = {data.phone}
        DOB = {data.DOB}
        key={i}
        />

        ))}

</div>
        )
    }
}
export default Datastore;