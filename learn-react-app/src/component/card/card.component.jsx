import React from "react";
import './card.styles.css';

export const Card = (prop) => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${prop.monster.id}?set=set2&size=180x180`}/>
        <h2>{prop.monster.name}</h2>
        <p> {prop.monster.email} </p>
    </div>
);