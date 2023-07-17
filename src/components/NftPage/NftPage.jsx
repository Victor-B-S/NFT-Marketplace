import { useEffect, useState } from "react";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import classes from "./NftPage.module.css";
import CardsList from "../UI/CardsList";

function NftPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const targetDate = "2023-07-17T23:59:59";

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={classes.bgImgNftPage}>
        <img src="./src/images/Background-NftPage.png" alt="" />
      </div>

      <div className={classes.gridNftPage}>
        <div className={classes.descriptionNftPage}>
          <h2>The Orbitians</h2>
          <p className={classes.mintedNftPage}>Minted on Sep 30, 2022</p>

          {windowWidth <= 480 ? (
            <>
              <CountdownTimer targetDate={targetDate} />
            </>
          ) : (
            <></>
          )}
          <div className={classes.createdNftPage}>
            <span className={classes.spanStyleNftPage}>Created By</span>
            <div className={classes.creatorNftPage}>
              <img src="./src/images/Avatares/Avatar1.png" alt="" />
              <h6>Orbitran</h6>
            </div>
          </div>

          <span className={classes.spanStyleNftPage}>Description</span>
          <p>
            The Orbitians <br />
            is a collection of 10,000 unique NFTs on the Ethereum blockchain,
            <br />
            <br />
            There are all sorts of beings in the NFT Universe. The most advanced
            and friendly of the bunch are Orbitians.
            <br />
            <br />
            They live in a metal space machines, high up in the sky and only
            have one foot on Earth.
            <br />
            These Orbitians are a peaceful race, but they have been at war with
            a group of invaders for many generations. The invaders are called
            Upside-Downs, because of their inverted bodies that live on the
            ground, yet do not know any other way to be. Upside-Downs believe
            that they will be able to win this war if they could only get an eye
            into Orbitian territory, so they have taken to make human beings
            their target.
          </p>
          <div className={classes.detailsNftPage}>
            <span className={classes.spanStyleNftPage}>Details</span>
            <a className={classes.viewOnNftPage}>
              <img src="./src/images/Icons/Globe.svg" alt="" />
              <p>View on Etherscan</p>
            </a>
            <a className={classes.viewOnNftPage}>
              <img src="./src/images/Icons/Globe.svg" alt="" />
              <p>View Original</p>
            </a>
          </div>

          <div>
            <span className={classes.spanStyleNftPage}>Tags</span>
            <div className={classes.tagsOptionsNftPage}>
              <p>ANIMATION</p>
              <p>ILLUSTRATION</p>
              <p>MOON</p>
              <p>MOON</p>
            </div>
          </div>
        </div>
        <div>
          {windowWidth > 480 ? (
            <>
              <CountdownTimer targetDate={targetDate} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      {windowWidth <= 480 ? (
        <>
          <div>
            <div className={classes.moreArtisitNftPage}>
              <h4>More from this artist</h4>
              <CardsList Page={"NftPage"} />
              <button type="button">Go to Artist Page</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className={classes.moreArtisitNftPage}>
              <h4>More from this artist</h4>
              <button type="button">Go to Artist Page</button>
            </div>
            <CardsList Page={"NftPage"} />
          </div>
        </>
      )}
    </>
  );
}

export default NftPage;
