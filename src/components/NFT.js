import React from "react";

function NFT(props) {

  function onadded() {
    props.onAdd({
      title: props.title,
      img: props.img,
      price: props.price
    })
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <img src={props.img} alt="NFT" /><br/>
      <button class="addButton" onClick={onadded}>{props.price}</button>
    </div>
  );
}

export default NFT;
