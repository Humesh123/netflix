import React from "react";
import Heading from "./Heading"

function Card(props){
    // console.log(props);
      return(
        <>
            <div className="cards">
              <div className="card">
              <img src={props.imgSrc} alt="myPic" className="card_img"/>
              <div className="container">
                <p className="card_category">{props.title}</p>
                <Heading sname={props.sname}/>
                <a href={props.link} target="_blank">
                  <button className="btn btn--block card__btn">Watch now</button>
                </a>
              </div>
    
              </div>
            </div>

    </>
    
      );
    }


    export default Card;