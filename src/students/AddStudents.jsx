
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

function AddStudents() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [course, setCourse] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
    };

    //post data
    const saveUser = () => {
        if (!name.trim() || !email.trim() || !mobilenumber.trim() || !course.trim()) {
            toast.info("Please fill up all the fields!",{autoClose: 1500});
            return;  
        }else{
            const data ={name,email,mobilenumber,course}
        fetch("http://localhost:3032/posts",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((res)=>{
                console.log(res);
                
                toast.success("Student Save Successfully!",{autoClose: 1500});
                setName('');
                setEmail('');
                setMobilenumber('');
                setCourse('');
            })
        })
        }
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 shadow" style={{marginTop:'-7px'}}>
                    <h2 className="text-center m-4"><u>Register Student</u></h2>
                    <form onSubmit={onSubmit} >
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label"><b>Name</b></label>
                            <input type="text" className="form-control" placeholder="Enter Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label"><b>Email Id</b></label>
                            <input type="email" className="form-control" placeholder="Enter Email Id" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Mobilenumber" className="form-label"><b>Mobile Number</b></label>
                            <input type="number" className="form-control" placeholder="Enter Mobile Number" name="mobilenumber" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Course" className="form-label"><b>Course</b></label>
                            <Form.Select className="form-select" aria-label="Default select example" name="course" value={course} onChange={(e) => setCourse(e.target.value)}>
                                <option value="">Select Course</option>
                                <option value="Computer Engineering">Computer Engineering</option>
                                <option value="Information Technology">Information Technology</option>
                                <option value="Automation Engineering">Automation Engineering</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                <option value="Agricultural Engineering">Agricultural Engineering</option>
                            </Form.Select>
                        </div>
                        <button type="submit" className="btn btn-outline-primary" onClick={saveUser}>Submit</button>
                        <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddStudents;