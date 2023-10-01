import React from 'react'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import { Link } from 'react-router-dom';
import classes from "./NftHighlight.module.css"

export default function NftHighlight() {
  
  const oneAndAHalfHour = 90 * 60 * 1000
  const targetDate = new Date();
  targetDate.setTime(targetDate.getTime() + oneAndAHalfHour)

  return (
    <section className={classes.container}>
      <div className={classes.gradient}>
        <div className={classes.content}>
          <div className={classes.left}>
            <div className={classes.artistCard}><img src="../src/images/Avatar-7.png" />Shroomie</div>
            <h3 className={classes.nftTitle}>Magic Mushrooms</h3>
            <div className={classes.web}>
              <Link to='/nft-page'><button className={classes.seeNFT}><img src="../src/images/Eye.svg" /><span>See NFT</span></button></Link>
            </div>
          </div>
          <div className={classes.right}>
            <CountdownTimer targetDate={targetDate} />
            <div className={classes.mobile}>
              <Link to='/nft-page'><button className={classes.seeNFT}><img src="../src/images/Eye.svg" /><span>See NFT</span></button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
