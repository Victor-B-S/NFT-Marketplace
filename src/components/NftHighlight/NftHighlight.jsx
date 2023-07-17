import React from 'react'
import CountdownTimer from '../CountdownTimer/CountdownTimer'

import classes from "./NftHighlight.module.css"

export default function NftHighlight() {

  const targetDate = '2023-07-17T23:59:59';

  return (
    <div className={classes.container}>
      <div className={classes.gradient}>
        <div className={classes.content}>
          <div className={classes.artistCard}><img src="../src/images/Avatar-7.png" />Shroomie</div>
          <h2>Magic Mushrooms</h2>
          <CountdownTimer targetDate={targetDate} />
          <button>See NFT</button>
        </div>
      </div>
    </div>
  )
}
