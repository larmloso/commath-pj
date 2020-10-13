import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/" + page);
  }

  return (
    <div>


      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand">
            Computational Mathematics
        </div>
        
        </div>
      </nav>


      <div className="container mt-5">
        <h3> เลือกบท </h3>

        <div class="list-group">
          <button onClick={() => { nextPage("commath-pj/page1") }} 
          class="list-group-item list-group-item-action">
            บทที่ 1 BASIC COMPUTING</button>

          <button onClick={() => { nextPage("commath-pj/page2") }} 
          class="list-group-item list-group-item-action">
            บทที่ 2 LINEAR ALGEBRAIC EQUATIONS</button>

            <button onClick={() => { nextPage("commath-pj/page3") }} 
          class="list-group-item list-group-item-action">
            บทที่ 3 INTERPOLATION & CURVE-FITTING</button>

            <button onClick={() => { nextPage("commath-pj/page4") }} 
          class="list-group-item list-group-item-action">
            บทที่ 4 DIFFERENTIATION</button>

            <button onClick={() => { nextPage("commath-pj/page5") }} 
          class="list-group-item list-group-item-action">
            บทที่ 5 INTEGRATION</button>

            <button onClick={() => { nextPage("commath-pj/page6") }} 
          class="list-group-item list-group-item-action">
            บทที่ 6 ROOT-FINDING</button>


        </div>

      </div>

    </div>
  );
}

export default Main;
