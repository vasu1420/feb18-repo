import React, { useState } from "react";

import "../css/my-mar-stu.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function AddStudent() {
  const disAll = useNavigate();

  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [math, setMath] = useState("");
  const [science, setScience] = useState("");
  const [english, setEnglish] = useState("");
  const [fee, setFee] = useState("");
  const [course, setCourse] = useState("");

  const getRollNo = (e: any) => {
    setRollNo(e.target.value);
  };
  const getName = (e: any) => {
    setName(e.target.value);
  };
  const getMaths = (e: any) => {
    setMath(e.target.value);
  };
  const getScience = (e: any) => {
    setScience(e.target.value);
  };
  const getEnglish = (e: any) => {
    setEnglish(e.target.value);
  };
  const getFee = (e: any) => {
    setFee(e.target.value);
  };

  const getCourse = (e: any) => {
    setCourse(e.target.value);
  };
  const saveStu = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("submit buttom clicked!!!!!");
    console.log("roll no--->" + rollNo);
    console.log("name--->" + name);
    console.log("maths--->" + math);
    console.log("science--->" + science);
    console.log("english--->" + english);
    console.log("fee--->" + fee);
    console.log("course--->" + course);
    const student = { rollNo, name, math, science, english, fee, course };

    axios.post("http://localhost:8080/stu/mng/add", student).then((res) => {
      console.log(res.data);
      disAll("/");
    });
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={saveStu} className="stu-add-mar">
        <div className="form-group">
          <label>RollNo</label>
          <input
            type="text"
            onChange={getRollNo}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Roll no"
          />
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={getName}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label>Math Marks</label>
          <input
            type="text"
            onChange={getMaths}
            className="form-control"
            placeholder="Enter Marks "
          />
        </div>
        <div className="form-group">
          <label>Sci Marks</label>
          <input
            type="text"
            onChange={getScience}
            className="form-control"
            placeholder="Enter Marks "
          />
        </div>
        <div className="form-group">
          <label>eng Marks</label>
          <input
            type="text"
            onChange={getEnglish}
            className="form-control"
            placeholder="Enter Marks "
          />
        </div>
        <div className="form-group">
          <label>Fee</label>
          <input
            type="text"
            onChange={getFee}
            className="form-control"
            placeholder="Enter Fee"
          />
        </div>
        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            onChange={getCourse}
            className="form-control"
            placeholder="Enter Course"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
