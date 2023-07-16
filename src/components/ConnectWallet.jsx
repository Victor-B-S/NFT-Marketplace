import bgConnect from "../images/Connect/Image Placeholder.svg";

import classes from "./ConnectWallet.module.css";

import ImageRC from "./UI/ImageRC";
import ConnectButtons from "./ConnectButtons";

function ConnectWallet() {
  
    return (
    <div className={classes.connectGrid}>
      <ImageRC img={bgConnect}/>
      <div className={classes.connectForm}>
        <h2>Create Account</h2>
        <p>
        Choose a wallet you want to connect. <br/>
        There are several wallet providers.
        </p>
        <ConnectButtons />
      </div>
    </div>
  );
}

export default ConnectWallet;
