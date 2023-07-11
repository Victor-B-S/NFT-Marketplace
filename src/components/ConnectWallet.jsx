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
          Welcome! enter your details and start
          <br /> creating, collecting and selling NFTs.
        </p>
        <ConnectButtons />
      </div>
    </div>
  );
}

export default ConnectWallet;
