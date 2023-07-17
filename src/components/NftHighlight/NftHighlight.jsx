import React from 'react'
import CountdownTimer from '../CountdownTimer/CountdownTimer'

import classes from "./NftHighlight.module.css"

export default function NftHighlight() {

  const targetDate = '2023-07-21T23:59:59';
 
  return (
    <section className={classes.container}>
      <div className={classes.gradient}>
        <div className={classes.content}>
          <div className={classes.left}>
            <div className={classes.artistCard}><img src="../src/images/Avatar-7.png" />Shroomie</div>
            <h3 className={classes.nftTitle}>Magic Mushrooms</h3>
            <div className={classes.web}>
              <button className={classes.seeNFT}><img src="../src/images/Eye.svg" /><span>See NFT</span></button>
            </div>
          </div>
          <div className={classes.right}>
            <CountdownTimer targetDate={targetDate} />
            <div className={classes.mobile}>
              <button className={classes.seeNFT}><img src="../src/images/Eye.svg" /><span>See NFT</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
