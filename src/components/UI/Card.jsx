/* eslint-disable react/prop-types */
import classes from "./Card.module.css";

function Card({cardName, artistName, cardImg, Page}) {
  const avatarImg = '../src/images/Avatares/Avatar1.png';
  let bgCard = '#2b2b2b'
  if(Page === 'NftPage') {
    
    bgCard = '#373737'
  }

  return (
    <>
      <div className={classes.card} style={{backgroundColor:bgCard}}>
        <div className={classes.cardImage}>
          <img src={cardImg} alt="" />
        </div>
        

        <div className={classes.cardInfo}>
            <h4>{artistName}</h4>
          <div className={classes.cardCreator}>
            <img src={avatarImg} alt="" className={classes.cardAvatar} />
            <p>{cardName}</p>
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
