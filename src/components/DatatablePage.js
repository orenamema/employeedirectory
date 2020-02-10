import React from 'react';
import Api from "../utils/Api";
import { MDBDataTable} from 'mdbreact';

class DatatablePage extends React.Component {

  state = {
    columns: [
      {
        label: 'Image',
        field: 'image',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 100
      },
      {
        label: 'DOB',
        field: 'DOB',
        sort: 'asc',
        width: 150
      }
    ],
    rows: [{name: "Krin", email: "krin.steward@example.com", image: "https://randomuser.me/api/portraits/women/34.jpg", phone: "(877)-580-1684", DOB: "1964-07-02T01:13:47.389Z"}
          ,{name: "Kent", email: "kent.ferguson@example.com", image: "https://randomuser.me/api/portraits/men/89.jpg", phone: "(805)-018-4976", DOB: "1992-10-25T11:12:19.284Z"}]
    
  };

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

  render() {
    return (
      <MDBDataTable
          striped
          bordered
          hover
          data={{ columns: this.state.columns, rows: this.state.rows }}
        />
    );

  }
  
};

export default DatatablePage;