import React from "react";
import FlightContact from "../assets/FlightContact.jpg";
import { useState } from "react";
import Axious from "axios";
import "../styles/Contact.css";
//import { renderMatches } from "react-router-dom";
//import { MenuList } from "@mui/material";

function Contact() {
  const [name, setname] = useState(""); //string
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const [employeeList, setEmployeeList] = useState([]); //store info of database into a list

  const addEmployee = () => {
    Axious.post("http://localhost:3001/create", {
      name: name,
      email: email,
      message: message,
    }).then(() => {
      console.log("success");
    });
  };

  const getEmployees = () => {
    Axious.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${FlightContact})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            onChange={(event) => {
              setname(event.target.value);
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            onChange={(event) => {
              setemail(event.target.value);
            }}
          />
          <label htmlFor="message">Message</label>
          <input
            name="Message"
            placeholder="Enter message..."
            type="text"
            onChange={(event) => {
              setmessage(event.target.value);
            }}
          />
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>

          <button type="submit" onClick={addEmployee}>
            {" "}
            Send Message
          </button>
        </form>
        <button onClick={getEmployees}>Show Details</button>
        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <h5>{val.name}</h5>
              <h5>{val.email}</h5>
              <h5>{val.message}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
