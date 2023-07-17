import React from 'react'
import CountdownTimer from '../CountdownTimer/CountdownTimer'

import classes from "./NftHighlight.module.css"

export default function NftHighlight() {

  const targetDate = '2023-07-17T23:59:59';

  return (
    <div className={classes.container}>
      <div className={classes.gradient}>
        <div className={classes.content}>
          <div className={classes.left}>
            <div className={classes.artistCard}><img src="../src/images/Avatar-7.png" />Shroomie</div>
            <h2 className={classes.nftTitle}>Magic Mushrooms</h2>
            <button className={classes.seeNFT}><img src="../src/images/Eye.svg" /><span>See NFT</span></button>
          </div>
          <div className={classes.right}>
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>
      </div>
    </div>
  )
}
