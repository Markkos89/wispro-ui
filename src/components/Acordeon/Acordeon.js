import React, { useState } from 'react';
import "./style.scss";

export default function Acordeon(props) {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => setToggle(!toggle);
  return (
    <div className="acordeon">
      <div className={`title-container ${toggle ? '' : 'unfolded'}`}>
        <div className="image-acordeon">
          <img
          src={props.image}
          alt='services'
          />
        </div>
        <h2 className="title-acordeon">{props.title}</h2>
        <div className={`toggle-button ${toggle ? 'open' : ''}`} onClick={onToggle}></div>
      </div>
      <div className={`toggle ${toggle ? 'open' : ''}`}>
        {props.children}
      </div>
    </div>
  )
}
