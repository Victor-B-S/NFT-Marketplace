import classes from "./HowItWorks.module.css";
import CardHowItWorks from "./CardHowItWorks/CardHowItWorks";
import imageCreate from "../../images/Icons/create.svg"
import imageSetup from "../../images/Icons/setup.svg"
import imageStart from "../../images/Icons/start.svg"

function HowItWorks() { 
    return (
    <>
      <section className={classes.hiwContainer}>
        <div>
          <h3 className={classes.hiwTitle}>How It Works</h3>
          <p className={classes.hiwDescription}>Find Out How To Get Started</p>
        </div>
        <div className={classes.hiwFlex}>
          <CardHowItWorks image={imageSetup} title={"Setup Your Wallet"} description={"Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."} />
          <CardHowItWorks image={imageCreate} title={"Create Collection"} description={"Upload your work and setup your collection. Add a description, social links and floor price."} />
          <CardHowItWorks image={imageStart} title={"Start Earning"} description={"Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."} /> 
        </div>
      </section>
    </>
  );
}
  
export default HowItWorks;