import React from "react";
import { useState,useEffect } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { Table, Button, Form } from "react-bootstrap";
import Axios from "axios";

const List = () => {
 
  const [dummy, setDummy] = useState([]);
  const [search,setSearch] = useState("")
  const [sortedvalue, setsortedvalue] = useState([]);
  const history = useHistory();
  console.log( window.location.href);
  async function fetchdata()
  {
      await Axios.get('/get').then((res)=>{
          console.log(res.data)
          setDummy(res.data)
          setsortedvalue(res.data)
      })
      console.log(sortedvalue)
  }
  useEffect(() => {
    fetchdata()
  }, [])
  const handleEdit = (i) => {
    console.log(dummy[i])
    return history.push({ pathname: `./update` , state: sortedvalue[i] });
  };
  const handlecreate = () => {
    // window.open("http://localhost:3000/Create")
    window.open(`${window.location.href}Create`)
    // return history.push({ pathname: "./Create" });
  };
  var data = sortedvalue.map((d, i) => 
     
      <>
        <tr onClick={()=>handleEdit(i)}>
          <td>{i + 1}</td>
          <td>{d.title}</td>
          <td>{d.lastupdated}</td>
        
        </tr>
      </>
    )
    // const data = sortedvalue.map(e => <>Mohit</>)
  
  const handlesearch=(e)=>{
      setSearch(e.target.value)
      console.log(search)
      let dummy1 = dummy
      if(e.target.value!=="")
      {
        dummy1 = dummy.filter((d)=>d.title.toUpperCase().startsWith(e.target.value.toUpperCase()))
      }
      setsortedvalue(dummy1)
  }
  return (
    <>
      <Router>
        <Button
          variant="danger"
          size="lg"
          className="mb-3 mt-3"
          onClick={handlecreate}
        >
          Create Document
        </Button>
       
      <Form.Group className="mt-2 mb-4">
        <Form.Control
          size="lg"
          type="text"
          onChange={(e)=>handlesearch(e)}
          value={search}
          placeholder="Enter Title..."
        />
      </Form.Group>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title </th>
              <th>Last Updeted</th>
             
            </tr>
          </thead>
          <tbody>
            {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr> */}
            {data}
          </tbody>
        </Table>
      </Router>
    </>
  );
};

export default List;
