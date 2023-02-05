import React,{ useState } from "react";
import Axios from "axios";


function Admin()
{
    const [option,setoption]=useState(0);
    const [FlightNo,setFlightNo]=useState("");
    const [FlightName,setFlightName]=useState("");
    const [Departure,setDeparture]=useState("");
    const [Arrival,setArrival]=useState("");
    const [DepartTime,setDepartTime]=useState("");
    const [Fare,setFare]=useState("");

    const [FlightInfo, setFlightInfo] = useState([]);

    const addFlight = () =>
    {
        const addFlightdetails = () => {
        Axios.post("http://localhost:3001/flight", {
        FlightNo: FlightNo,
        FlightName: FlightName,
        Departure: Departure,
        Arrival: Arrival,
        DepartTime: DepartTime,
        Fare: Fare
        }).then(() => {
            console.log("success");
        });
    }
    setoption(1);
    addFlightdetails();
    }
    const getFlight = () => {
        setoption(2);
        Axios.get("http://localhost:3001/flightinfo", {
          params: {
            FlightNo: FlightNo,
          },
        }).then((response) => {
          setFlightInfo(response.data);
        });
      };

    const deleteFlight = () =>
    {
        
            
          const deleteFlightDetails = () => {
            Axios.delete("http://localhost:3001/flight", {
              params: {
                FlightNo: FlightNo,
              },
            }).then((response) => {
              console.log("Success");
            });
          };
          deleteFlightDetails();
          setoption(3)
    }
/*
    function updateflight()
    {
        
    }
    */
    
    return (
        <body>
            {
                option===0 &&   
                <div>
                    <button onClick={addFlight}>Add Flight</button>
                    <br></br>
                    <button onClick={getFlight}>Delete Flight</button>
                    
                </div>
            }
            {
                option===1 &&
                <div>
                    <form id="addflightform">
                    <label>
                    Flight No:<br></br>
                    <input type="text" required onChange={(e) => setFlightNo(e.target.value)}  />
                    </label>
                    <label>
                    Flight Name:<br></br>
                    <input type="text" required onChange={(e) => setFlightName(e.target.value)}  />
                    </label>
                    <label>
                    Departure:<br></br>
                    <input type="text" required onChange={(e) => setDeparture(e.target.value)}  />
                    </label>
                    <label>
                    Arrival:<br></br>
                        <input type="text" required onChange={(e) => setArrival(e.target.value)}/>
                    </label>
                    <label>
                    DepartTime:<br></br>
                    <input type="text" required onChange={(e) => setDepartTime(e.target.value)} />
                    </label>
                    <label>
                    Fare:<br></br>
                    <input type="number" min={0} required onChange={(e) => setFare(e.target.value)} />
                    </label>
                    <br></br>
                    <br></br>
                    <input id="submit" type="button" value="Add Flight" onClick={addFlight}/>
                    </form>
                </div>
            }
            { option ===2  &&
            <div id="cancelouterdiv">
        <h1>Enter your Flight No</h1>
        <br></br>
        <input
          id="FlightNo"
          onChange={(e) => setFlightNo(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <button
          onClick={() => {
            getFlight();
          }}
        >
          Search
        </button>
        {FlightInfo.map((val, key) => {
          return (
            <div className="ShowResults">
              <table id="cancelpassengertable">
                <tr>
                  <td>
                    <p>FlightNo</p>
                    <br></br>
                    {val.Flightno}
                  </td>
                  <td>
                    <p>FlightName</p>
                    <br></br>
                    {val.Flightname}
                  </td>
                  <td>
                    <p>Departure</p>
                    <br></br>
                    {val.Departure}
                  </td>
                  <td>
                    <p>Arrival</p>
                    <br></br>
                    {val.Arrival}
                  </td>
                  <td>
                    <p>Depart Time</p>
                    <br></br>
                    {val.DepartTime}
                  </td>
                  <td>
                    <p>Fare</p>
                    <br></br>
                    {val.Fare}
                  </td>
                </tr>
              </table>
              <button onClick={deleteFlight}>Delete Flight</button>
            </div>
          );
        })}
      </div>
    }  
    {
        option===3 &&
        <div id ="cancelouterdiv">
            <br></br>
            <h1>
                Flight deleted from database.
            </h1>
        </div>

    }
        </body>
    )
}

export default Admin;