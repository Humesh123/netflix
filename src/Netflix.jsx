import React from "react"
import Sdata from "./Sdata";
import Card from "./Cards";

const Netflix = () =>
{
    return(<> <Card key = {Sdata[1].id}
        imgSrc={Sdata[1].img} 
        title={Sdata[1].title}
        sname={Sdata[1].name} 
        link={Sdata[1].link}/>

        <Card key = {Sdata[2].id}
        imgSrc={Sdata[2].img} 
        title={Sdata[2].title}
        sname={Sdata[2].name} 
        link={Sdata[2].link}/>

        <Card key = {Sdata[3].id}
        imgSrc={Sdata[3].img} 
        title={Sdata[3].title}
        sname={Sdata[3].name} 
        link={Sdata[3].link}/>

        <Card key = {Sdata[5].id}
        imgSrc={Sdata[5].img} 
        title={Sdata[5].title}
        sname={Sdata[5].name} 
        link={Sdata[5].link}/>
        </>
    );
}

export default Netflix;