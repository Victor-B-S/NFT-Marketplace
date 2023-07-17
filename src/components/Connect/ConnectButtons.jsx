
import classes from './ConnectButtons.module.css'

function ConnectButtons(){
    return(
        <div className={classes.flexButtons}>
           <button className={classes.button}>
            <span className={classes.metamask}></span>
            <p>Metamask</p>
           </button>
            
           <button className={classes.button}>
            <span className={classes.wallet}></span>
           
            <p>Wallet Connect</p>
           </button>

           <button className={classes.button}>
            <span className={classes.coinbase}></span>
           
            <p>Coinbase</p>
           </button>
          
            
        </div>
    )
}


export default ConnectButtons;