import Card from "./UI/Card";

import classes from "./Marketplace.module.css";
import { imagePaths } from "./UI/imagePaths";
import { useEffect, useState } from "react";

function Marketplace() {
  
  const [numCards, setNumCards] = useState(9);
  
  useEffect(() => {
    const handleResize = () => {
      
      

      if(window.innerWidth <= 480){
        setNumCards(3);
      }else if((window.innerWidth <= 768) && (window.innerWidth > 480)){
        setNumCards(6);
      }else{
        setNumCards(9);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            {imagePaths
              .slice(0, numCards)
              .map((path, index) => (
                <Card key={index} cardImg={path} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Marketplace;
