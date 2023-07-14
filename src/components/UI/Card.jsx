/* eslint-disable react/prop-types */


import classes from "./Card.module.css";
import avatarImg from "../../images/Avatares/AvatarPlaceholder.png";

function Card(props) {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.cardImage}>
          <img src={props.cardImg} alt="" />
        </div>
        

        <div className={classes.cardInfo}>
            <h4>Distant Galaxy</h4>
          <div className={classes.cardCreator}>
            <img src={avatarImg} alt="" className={classes.cardAvatar} />
            <p>MoonDancer</p>
          </div>

          <div className={classes.cardAuctionPrice}>
            <div className={classes.cardPrice}>
              <span>Price</span>
              <p>1.63 ETH</p>
            </div>
            <div className={classes.cardHighestBid}>
              <span>Highest Bid</span>
              <p>0.33 wETH</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
