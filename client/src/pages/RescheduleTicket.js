import React, { useState } from "react";
import "../styles/CancelTicket.css";
import Axios from "axios";

let mindate = new Date().toISOString().split("T")[0];

function RescheduleTicket()
{
    const [TicketNo, setTicketNo] = useState("");
    const [PassengerInfo, setPassengerInfo] = useState([]);
    const [DepartDate, setDepartDate] = useState("");
    let FlightNo;


    const getPassenger = () => {
        Axios.get("http://localhost:3001/passenger", {
          params: {
            TicketNo: TicketNo,
          },
        }).then((response) => {
          setPassengerInfo(response.data);
           if(response.data.length===0)
           {
                alert("Ticket Not Found");
           }
        });
      };

    const updatePassenger=()=> {
        Axios.put("http://localhost:3001/passenger", {
      TicketNo: TicketNo,
      DepartDate:DepartDate,
    });

    let passengerobj = {
        TicketNo:TicketNo,
        FlightNo:FlightNo
      };
  
      let passengerobj_serialized = JSON.stringify(passengerobj);
      localStorage.setItem("passengerobj", passengerobj_serialized);
      window.open("http://localhost:3000/ETicket");
    }
    
    return (
    <body id ="reschedulebody">
        <div id ="cancelouterdiv">
            <h1>Enter your Ticket No</h1>
            <br></br>
            <input id="ticketno" onChange={(e) => setTicketNo(e.target.value)}></input>
            <br></br>
            <br></br>
            <button onClick={() => {getPassenger();}}>Search</button>
            {PassengerInfo.map((val, key) => {
          FlightNo=val.FlightNo;
          return (
            <div className="ShowResults">
              <table id="cancelpassengertable">
                <tr>
                  <td>
                    <p>Name</p>
                    <br></br>
                    {val.PassengerName}
                  </td>
                  <td>
                    <p> Email</p>
                    <br></br>
                    {val.PassengerEmail}
                  </td>
                  <td>
                    <p>Phone No</p>
                    <br></br>
                    {val.PassengerPhoneNo}
                  </td>
                  <td>
                    <p>Departure Date</p>
                    <br></br>
                    {val.DepartDate}
                  </td>
                  <td>
                    <p>Flight No</p>
                    <br></br>
                    {val.FlightNo}
                  </td>
                  <td>
                    <p>Flight Class</p>
                    <br></br>
                    {val.FlightClass}
                  </td>
                </tr>
              </table>
              <br></br>
        <label>
            <h1>Enter new date: </h1><br></br>
            <input
              type="date"
              min={mindate}
              required
              onChange={(e) => setDepartDate(e.target.value)}
            />
        </label>
        <br></br><br></br>
        <button onClick={()=>updatePassenger()}>Reschedule Booking</button>
            </div>
          );
        })
        }
        
        </div>
    </body>
    )
}
export default RescheduleTicket;