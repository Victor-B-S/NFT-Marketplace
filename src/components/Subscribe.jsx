import React from 'react'
import classes from './Subscribe.module.css'

export default function Subscribe() {
  return (
    <section className={classes.subscribeWidget}>
        <div className={classes.subscribeWidgetContent}>
            <div className={classes.subscribeWidgetContentImg}></div>
            <div className={classes.subscribeWidgetForm}>
                <div className={classes.subscribeWidgetText}>
                    <h3>Join Our Weekly Digest</h3>
                    <p>Get Exclusive Promotions & Updates Straight To Your Inbox</p>
                </div>
                <div className={classes.subscribeWidgetInputHolder}>
                    <input type="email" className={classes.subscribeWidgetInput} placeholder="Enter your email here" />
                    <div className={classes.subscribeWidgetBtn}>
                        <img src="../src/images/EnvelopeSimple.svg" />
                        <div className={classes.subscribeWidgetBtnFont}>Subscribe</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
