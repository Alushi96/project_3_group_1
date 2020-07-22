import React, { useState, useEffect, Component } from "react";
import Actioncard from "../components/actioncard";
import Locationcard from "../components/locationcard";
import { ZoomMtg } from '@zoomus/websdk';
import API from "../utils/API";
import $ from "jquery";
import { useAuth } from "../context/auth";
import 'bootstrap/dist/css/bootstrap.min.css';

ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.9/lib', '/av');
    
    
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();



// var signatureEndpoint = 'http://localhost:4000/'
var apiKey = 'rCTS33F9QzaWz2z_KtB2MA'
const API_KEY = "rCTS33F9QzaWz2z_KtB2MA";
const API_SECRET = "rI2T6cwPVk9rWd4BxSQufKpsOunvJvH7mjWU";
var meetingNumber = "3356527600"
var role = "0"
var leaveUrl;
if (process.env.NODE_ENV === "production") {
    leaveUrl = "https://reacthealthapp.herokuapp.com/";
} else {
    leaveUrl = 'http://localhost:3000/ptzoom'
}
var userName = 'Patient'
var userEmail = ''
var passWord = '5HYqGY'
var signa;

const signature = ZoomMtg.generateSignature({
    meetingNumber: meetingNumber,
    apiKey: API_KEY,
    apiSecret: API_SECRET,
    role: role,
    success: function (res) {
      console.log(res.result);
      signa = res.result;
    },
  });



let zoomMeeting = document.getElementById("zmmtg-root").style.display="none";



function PtDashboard() {

    const [user, setUser] = useState([])

    useEffect(() => {
        loadUser()
      }, [])

      function loadUser() {

        const existingTokens = JSON.parse(localStorage.getItem("tokens"));
        var id = existingTokens;

        API.getUser(id)
          .then(res => {setUser(res.data)})
          .catch(err => console.log(err));

      };

      function zoomCall() {

        zoomMeeting = document.getElementById("zmmtg-root").style.display="block";
    
        console.log("hi");

    
    
    
    
    ZoomMtg.init({
        leaveUrl: leaveUrl,
        isSupportAV: true,
        success: (success) => {
          console.log(success)
      
          ZoomMtg.join({
            signature: signature,
            apiKey: apiKey,
            meetingNumber: meetingNumber,
            userName: userName,
            userEmail: userEmail,
            passWord: passWord,
            success: (success) => {
              console.log("Success")
            },
            error: (error) => {
              console.log(error)
            }
          })
      
        },
        error: (error) => {
          console.log(error)
        }
      })
    
    }
      

        const { setAuthTokens } = useAuth();
      
        function logOut() {
        setAuthTokens("");
    }


        return (
            <div className="pt-5 bg-white">
        <div>
           <div className="sb-nav-fixed">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="/ptdashboard">HealthApp</a>
            <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i className="fas fa-bars"></i></button>
            {/* <!-- Navbar Search--> */}
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <button className="btn btn-primary" type="button" onClick={logOut}>Logout</button>
            </form>
            {/* <!-- Navbar--> */}
           
        </nav>
            <div id="layoutSidenav_content">
            <main className="bg-light">
                    <div className="container-fluid bg-light">
                    <h5 className="mt-4 pt-5 float-right pr-4">           <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        {user.Name +" "+ user.Surname}
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Patient ID:</div>
                        {user._id}
                    </div></h5>
                        <h1 className="mt-4 pt-5">Patient Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Welcome, {user.Name}!</li>
                        </ol>
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-primary text-white mb-4">
                                    <div className="card-body">View Your Upcoming Appointments</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="/ptapp">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-warning text-white mb-4">
                                    <div className="card-body">Begin Your Virtual Visit</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-success text-white mb-4">
                                    <div className="card-body">View Your Medical Record</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="/pthealthrecord">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                           <Actioncard title="Health Library Search" color="bg-danger"/>
                        </div>
                      
                        <button type="submit" className="btn btn-primary" id="join_iframe" onClick={zoomCall}>Join Meeting</button> 


                            </div>
                            <div className="card-body py-5">
                                
                            </div>
                        {/* </div>
                    </div> */}
                </main>
                <footer className="py-5 bg-light mt-auto">
                    <div className="container-fluid py-3">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; HealthApp 2020</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</div>
);
}

export default PtDashboard;
