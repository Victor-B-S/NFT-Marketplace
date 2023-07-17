import Card from "./components/UI/Card";
import classes from "./Marketplace.module.css";
import { imagePaths } from "./components/UI/imagePaths";
import { useEffect, useState } from "react";
import CardsList from "./components/UI/CardsList";


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
      <div className={classes.marketLine}></div>
      <div className={classes.marketContainer}>
        <div className={classes.marketFlex}>
          <div className={classes.marketFilter}>
            <div className={`${classes.marketFilter} ${classes.marketFilterActive}`}>
              <span>NFTs</span>
              <span>302</span>
            </div>
            <div className={classes.marketFilter}>
              <span>Collections</span>
              <span>67</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.marketCards}>
        <CardsList Page={"MarketPlace"} /> 
      </div>
    </>
  );
}

export default Marketplace;
