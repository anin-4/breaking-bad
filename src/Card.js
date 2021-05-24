import React from "react";
import "./App.css";
export default function Card({ value }) {
  const { img, birthday, status, nickname, name } = value;
  return (
    <div className="maincontainer">
      <div className="thecard">
        <div className="thefront">
          <img src={img} className="image-content" alt={name}></img>
        </div>
        <div className="theback">
          <h4>Name : {name}</h4>
          <h4>Birth Date : {birthday}</h4>
          <h4>Status :{status}</h4>
          <h4>nickname : {nickname}</h4>
        </div>
      </div>
    </div>
  );
}
