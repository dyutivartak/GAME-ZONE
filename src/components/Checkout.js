import React from "react";

// var counter = 0;

function CheckOut(props) {

    return <div class="mainscreen">
      <div class="card">
        <div class="leftside">
        <h1>{props.nft.title}</h1>
        <img
            src= {props.nft.img}
            class="product"
            alt="Shoes"
          />
        </div>
        <div class="rightside">
          <form action="">
            <h1>Payment</h1><br />
            <h2>{props.nft.title}</h2><br />
            <p>Net Price:</p>
            <p><b>{props.nft.price}</b></p>
            <hr></hr><br />
            <p>Cardholder Name</p>
            <input type="text" class="inputbox" name="name" required />
            <p>Cardholder Number</p>
            <input type="number" class="inputbox" name="name" required />
            <p>Card Type</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
            <div class="expcvv">
                <p class="expcvv_text">Expiry</p>
                <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

                <p class="expcvv_text2">CVV</p>
                <input type="password" class="inputbox" name="cvv" id="cvv" required />
            </div>
            <p></p>
            <button type="submit" class="button">CheckOut</button>
          </form>
        </div>
      </div>
    </div>

}

export default CheckOut;