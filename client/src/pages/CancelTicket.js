import React, { useState } from "react";
import "../styles/CancelTicket.css";
import Axios from "axios";



function CancelTicket() {
    const [count,setCount]= useState(0);
  const [PassengerInfo, setPassengerInfo] = useState([]);
  const [TicketNo, setTicketNo] = useState("");

  const getPassenger = () => {
    Axios.get("http://localhost:3001/passenger", {
      params: {
        TicketNo: TicketNo,
      },
    }).then((response) => {
      setPassengerInfo(response.data);
      // console.log(response.data)
       if(response.data.length===0)
       {
            alert("Ticket Not Found");
       }
    });
  };

  const deletePassenger = () => {
    Axios.delete("http://localhost:3001/passenger", {
      params: {
        TicketNo: TicketNo,
      },
    }).then((response) => {
      console.log("Success");
    });
    setCount(1)
  };
  return (
    <body>
    { count===0 &&
      <div id="cancelouterdiv">
        <h1>Enter your Ticket No</h1>
        <br></br>
        <input
          id="ticketno"
          onChange={(e) => setTicketNo(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <button
          onClick={() => {
            getPassenger();
          }}
        >
          Search
        </button>
        {PassengerInfo.map((val, key) => {
          let DepartDate = val.DepartDate;
          DepartDate = DepartDate.toString().split("T")[0];
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
                    {DepartDate}
                  </td>
                  <td>
                    <p>Flight Class</p>
                    <br></br>
                    {val.FlightClass}
                  </td>
                </tr>
              </table>
              <button onClick={deletePassenger}>Cancel Booking</button>
            </div>
          );
        })}
      </div>
    }  
    {
        count===1 &&
        <div id ="cancelouterdiv">
            <br></br>
            <h1>
                Your Ticket has been Cancelled.
            </h1>
        </div>

    }
    </body>
  );
}
export default CancelTicket;
