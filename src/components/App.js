import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import NFT from "./NFT";
import nfts from "../nfts";
import CheckOut from "./Checkout";

function App() {

  const [nft, updateNFT] = useState({
    key: -1,
    title: "WELCOME TO GAMEZONE ",
    img: "https://img.freepik.com/free-vector/game-design-icon-logo-gamepad-play-arcade-video-game-gamer-modern-illustration-with-controller-player-geek-culture-game-zone_185390-446.jpg?w=2000",
    price: "$0.00",
  })

  function selectedNFT(props) {
    updateNFT({
      key: props.key,
      title: props.title,
      img: props.img,
      price: props.price
    })
  }
  
  return (
    <div>
      <Header />
      {nfts.map(x => <NFT onAdd={selectedNFT} key = {x.key} title={x.title} img = {x.img} price={x.price}/>)}
      <CheckOut nft={nft}/>
      <Footer />
    </div>
  );
}

export default App;
