import React from 'react';
import { Link } from "react-router-dom";
export default function Signup() {
    return (

        <>
            <div class="background1">

                <div class="container">

                    <div class="d-flex justify-content-center align-item-center">
                        <div class="card1">
                            <div class="card-title text-center  text-uppercase fs-2 fw-bold fst-italic">
                                Sign-in
                            </div>
                            <div class="p-5">
                                <label for="inputemail" class="form-label">Email</label>
                                <input type="text" id="inputemail" class="form-control" />
                                <br />

                                <label for="inputPassword5" class="form-label">Password</label>
                                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
                                <div id="passwordHelpBlock" class="form-text text-light">
                                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                </div>
                                <br />
                                <button class="btn btn-primary">Sign in</button> <Link to="/" class="btn btn-danger fs-6 fw-bold ms-2"> Back</Link>
                            </div>
                        </div>
                    </div>
                    <Link to="/Signup"></Link>

                </div>
            </div>
        </>


    );
}