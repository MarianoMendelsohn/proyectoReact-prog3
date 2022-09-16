import React from "react";
import { useState, useEffect } from "react";
import Card from '../../components/Card/Card'

const Favoritos = ({favs}) => {
    let favoritos = []
    useEffect(()=>{
        favoritos = favs;
    },[favs])
    console.log(favs)
    return(
        <div>
            {
                favs.map((fav)=>{
                    <Card id={fav} />
                })
            }
        </div>
    )
}

export default Favoritos