import React from 'react';
import './cards.component.css';
const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt="monstor" src={`https://robohash.org/${props.monstor.id}?set=set2&size=180x180`} />
            <h2>{props.monstor.name}</h2>
            <p>{props.monstor.email}</p>
        </div>
    );
}

export default Card;
