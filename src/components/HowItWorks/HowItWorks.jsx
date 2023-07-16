import classes from "./HowItWorks.module.css";
import CardHowItWorks from "./CardHowItWorks/CardHowItWorks";

function HowItWorks() {
    return (
    <>
      <div className={classes.hiwContainer}>
        <div className={classes.hiwTitle}>
          <h3>How It Works</h3>
        </div>
        <div className={classes.hiwFlex}>
          <div className={classes.gridCard2}>
              <CardHowItWorks title={"Setup Your Wallet"} description={"Setup abc123"} /> 
          </div>
        </div>
      </div>
    </>
  );
}
  
export default HowItWorks;