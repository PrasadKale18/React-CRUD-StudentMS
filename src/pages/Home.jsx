import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        setList()
    },[])

    function setList(){
        fetch("http://localhost:3032/posts").then((result) => {
            result.json().then((res) => {
                console.log(res);
                setData(res)
            })
        })
    }

    //delete data
    function deleteUser(id) {
        fetch("http://localhost:3032/posts/" + id, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((res) => {
                console.log(res);
                toast.error("Student Delete Successfully!",{autoClose: 1500})
                setList();
                
            });
        });
    }

    
    return (
        <div className="container">
            <div className="py-4">
                <Table bordered hover variant="light" className="shadow mt-5 text-center" >
                    <thead style={{ borderBottom: '2px solid black'}}>
                        <tr>
                            <th style={{ background: 'black',color:'white'}}>Id</th>
                            <th style={{ background: 'black',color:'white'}}>Name</th>
                            <th style={{ background: 'black',color:'white'}}>Email Id</th>
                            <th style={{ background: 'black',color:'white'}}>Mobile Number</th>
                            <th style={{ background: 'black',color:'white'}}>Course</th>
                            <th style={{ background: 'black',color:'white'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) => (
                                <tr key={i}>
                                    <td><b>{i + 1}</b></td>
                                    <td><b>{item.name}</b></td>
                                    <td><b>{item.email}</b></td>
                                    <td><b>{item.mobilenumber}</b></td>
                                    <td><b>{item.course}</b></td>
                                    <td>
                                        <Link className="btn btn-primary mx-2" to={`/editstudent/${item.id}`}>Edit</Link>
                                        <button className="btn btn-danger mx-2" onClick={()=>deleteUser(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Home;
