import React from "react";
import { Link } from "react-router-dom";
export default function Product() {
    return (
        <div className="">
            <div class=" row">
                <div className="card col-2">
                    <img src="https://c8.alamy.com/comp/PRFTN4/bunch-of-fresh-ripe-banana-fruits-isolated-on-white-background-PRFTN4.jpg" alt="" />
                    <h1>Banana</h1>
                    <h2>price:$0.10</h2>
                    <button className="btn btn-primary m-3">Buy</button>
                </div>

                <div className="card col-2 ms-5 ">
                    <img src="https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg?semt=ais_hybrid&w=740" alt="" />
                    <h1>Apple</h1>
                    <h2>price:$0.99</h2>
                    <button className="btn btn-primary m-3">Buy</button>
                </div>
                <div className="card col-2 ms-5">
                    <img src="https://media.gettyimages.com/id/185284489/photo/orange.jpg?s=612x612&w=gi&k=20&c=HZYbLyTgUgxD1WE-O-ltBo_Lui6pX6rQLHQJdYdyl_g=" alt="" />
                    <br />
                    <h1>orange</h1>
                    <h2>price:$0.50</h2>
                    <button className="btn btn-primary m-3">Buy</button>
                </div>
                <div className="card col-2 ms-5 mt-2" id="card1">
                    <img src="https://t4.ftcdn.net/jpg/05/37/04/61/360_F_537046123_s8JVn2NrClPQDOryhSm8jonYZPfIzPRX.jpg" alt="" />
                    <br />
                    <br />
                    <h1>Tomato</h1>
                    <h2>price:$0.10</h2>

                    <button className="btn btn-primary mt-3">Buy</button>
                </div>








            </div>
            <div class="homefooter ">
                <h6 class="text-decoration-underline fst-italic ">About Us</h6>
                <span class="fw-lighter ">
                    bharathikannan@gmail.com <br />
                    contact no:6379301319

                </span>
                <br />
                <br />
                <p>
                    &copy;right2025@.All rights are resreved.
                </p>
            </div>

        </div>




    );
}