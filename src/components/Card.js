import React from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {


  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="Due_Date">Due Date: {props.Due_Date}</h2>
          <h3 className="Description">Description: {props.Description}</h3>
          <p className="Status">Status: {props.Status}</p>
      </div>
  );
};

export default Card;