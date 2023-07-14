import React from 'react'
import CountdownTimer from '../CountdownTimer/CountdownTimer'

import classes from "./NftHighlight.module.css"

export default function NftHighlight() {

    const targetDate = '2023-12-31T23:59:59';

  return (
    <div>
        <p>Auction Ends in:</p>
        <CountdownTimer targetDate={targetDate} />
    </div>
  )
}
