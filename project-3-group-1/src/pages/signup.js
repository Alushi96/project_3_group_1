import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>User Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Middle name</label>
                    <input type="text" className="form-control" placeholder="Middle name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" className="form-control" value="1992-12-03" id="example-date-input" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" className="form-control" value="1-(555)-555-5555" id="example-tel-input" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}