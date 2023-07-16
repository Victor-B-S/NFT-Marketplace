import classes from "./HowItWorks.module.css";
import CardHowItWorks from "./CardHowItWorks/CardHowItWorks";
import imageCreate from "../../images/Icons/create.svg"
import imageSetup from "../../images/Icons/setup.svg"
import imageStart from "../../images/Icons/start.svg"

function HowItWorks() {
    return (
    <>
      <div className={classes.hiwContainer}>
        <div className={classes.hiwTitle}>
          <h3>How It Works</h3>
          <p>Find Out How To Get Started</p>
        </div>
        <div className={classes.hiwFlex}>
          <div className={classes.gridCard2}>
              <CardHowItWorks image={imageCreate} title={"Setup Your Wallet"} description={"Setup abc123"} />
              <CardHowItWorks image={imageSetup} title={"Setup Your Wallet2"} description={"Setup abc12345"} />
              <CardHowItWorks image={imageStart} title={"Setup Your Wallet3"} description={"Setup abc123"} /> 
          </div>
        </div>
      </div>
    </>
  );
}
  
export default HowItWorks;