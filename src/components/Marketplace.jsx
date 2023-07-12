import Card from "./UI/Card";

import classes from "./Marketplace.module.css";

function Marketplace() {
  return (
    <>
      <div className={classes.marketContainer}>
        <div className={classes.marketFlex}>
          <div className={classes.marketSearch}>
            <h3>Browse Marketplace</h3>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <input type="text" placeholder="Search your favourite NFTs" />
          </div>
        </div>
      </div>

      <div className={classes.marketContainer}>
        <div className={classes.marketFlex}>
          <div className={classes.marketFilter}>
            <div className={classes.marketFilterNfts}>
              <span>NFTs</span>
              <span>302</span>
            </div>
            <div className={classes.marketFilterCollections}>
              <span>Collections</span>
              <span>67</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.marketContainer}>
        <div className={classes.marketFlex}>
          <div className={classes.gridCard}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Marketplace;
