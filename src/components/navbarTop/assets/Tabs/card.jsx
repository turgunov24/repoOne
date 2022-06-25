import * as React from 'react';
import { useContext } from 'react';
import { Context } from '../../../contex';
import "./card.css"

export default function MultiActionAreaCard(props) {
    const {orders, setOrders} = useContext(Context);
    let title = props.title
    let image = props.img
    let price = props.price
    let arr = []
    const Yubor = ()=>{
        arr.push(...orders,{title,image,price})
        setOrders(arr)
    }
    
  return (
    <div onClick={Yubor} className='card'>
        <img src={image} alt="" />
        <div className='bottom'>
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    </div>
  );
}
