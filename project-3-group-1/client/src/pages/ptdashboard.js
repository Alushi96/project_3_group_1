import React, { useState, useEffect } from "react";
import Actioncard from "../components/actioncard";
import Locationcard from "../components/locationcard";
import API from "../utils/API";
import { useAuth } from "../context/auth";
import 'bootstrap/dist/css/bootstrap.min.css';


function PtDashboard() {

    const [user, setUser] = useState([])
    const [isLoaded, setLoaded] = useState(false);
    const [doctor, setDoctor] = useState([])

    useEffect(() => {
        loadUser()
      }, [])

      function loadUser() {

        const existingTokens = JSON.parse(localStorage.getItem("tokens"));
        var id = existingTokens;

        API.getUser(id)
        //   .then(res => console.log(res))
          .then(res => {
              if (res.data) {
              setUser(res.data);
                if(res.data.doctor) {
                    setLoaded(true)
                }
            }
            
          })
          .catch(err => console.log(err));

      };

      if (isLoaded) {
          loadDoctors();
          setLoaded(false)
      }

      function loadDoctors() {
          API.getDoctor(user.doctor[0])
          .then(res => setDoctor(res.data))
          .catch(err => console.log(err))
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
        {/* <div id="layoutSidenav"> */}
            {/* <div id="layoutSidenav_nav"> */}
                {/* <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion"> */}
                    {/* <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Menu</div>
                            <a className="nav-link" href="/ptdashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <div className="sb-sidenav-menu-heading">Your Health</div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                My Appointments
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="layout-static.html">Schedule Appointment</a>
                                    <a className="nav-link" href="layout-sidenav-light.html">Virtual Appointment</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                               My Health Record
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="sb-sidenav-menu-heading">Additional Features</div>
                            <a className="nav-link" href="/pthealthsearch">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Health Condition Search
                            </a>
                        
                        </div>
                    </div> */}
                    {/* <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        {user.Name +" "+ user.Surname}
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Patient ID:</div>
                        {user._id}
                    </div> */}
                {/* </nav> */}
            {/* </div> */}


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
                                        <a className="small text-white stretched-link" href="#">View Details</a>
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
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                           <Actioncard title="Health Library Search" color="bg-danger"/>
                        </div>
                      
                               <Locationcard doctor={doctor.Name} specialty={doctor.Field}
                               officename={doctor.OfficeName}
                               address1={doctor.Address}
                               hours={doctor.Hours}
                               phone={doctor.PhoneNumber}/>

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
