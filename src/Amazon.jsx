import React from "react"
import Sdata from "./Sdata";
import Card from "./Cards";

const Amazon = () =>
{
    return( <Card key = {Sdata[1].id}
        imgSrc={Sdata[4].img} 
        title={Sdata[4].title}
        sname={Sdata[4].name} 
        link={Sdata[4].link}/>
    );
}

export default Amazon;