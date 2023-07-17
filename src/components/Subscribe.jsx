import React from 'react'
import classes from './Subscribe.module.css'

export default function Subscribe() {
  return (
    <div className={classes.subscribeWidget}>
        <div className={classes.subscribeWidgetContent}>
            <div className={classes.subscribeWidgetContentImg}></div>
            <div className={classes.subscribeWidgetForm}>
                <div className={classes.subscribeWidgetText}>
                    <h1>teste</h1>
                    <p>teste2</p>
                </div>
                <div className={classes.subscribeWidgetButton}>
                    teste4
                </div>
            </div>
        </div>
    </div>
  )
}
