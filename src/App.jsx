import React from "react";
// import Netflix from "./Netflix";
// import Amazon from "./Amazon";
import Card from "./Cards";
import Sdata from "./Sdata";


const myfavS = "Netflix";





const App = () =>{
                    return(
                                <>
                                
                                <h2>List of Top 5 Netflix web Series</h2>
                                <div className="Main">
                               { Sdata.map( (val) => {
                                    return (<Card key = {val.id}
                                                imgSrc={val.img} 
                                                title={val.title}
                                                sname={val.name} 
                                                link={val.link}/>);
                                } )
                               }
                                </div>
                                </>
                    );
        }


        export default App;