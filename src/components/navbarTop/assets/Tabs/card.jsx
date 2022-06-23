import * as React from 'react';
import "./card.css"
export default function MultiActionAreaCard(props) {
    let title = props.title
    let image = props.img
    let price = props.price
  return (
    <div className='card'>
        <img src={image} alt="" />
        <div className='bottom'>
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    </div>
  );
}
