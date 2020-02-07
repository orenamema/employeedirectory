import React from "react";
import Api from "../utils/Api";
import Records from "./Record"
class Datastore extends React.Component {
    state = {
employees:""
    }
    componentDidMount =()=>{
        Api.getusers().then(results=>{
            console.log (results)
            this.setState({
                employees:results.data.results
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
    
   rec.map((data, i) => {
       console.log (data)
<Records
name = {data.name}
email = {data.email}
location = {data.location}
gender = {data.gender}
key={i}
/>
    }
}
</div>
        )
    }
}
export default Datastore;