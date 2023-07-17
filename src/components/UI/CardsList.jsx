/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Card from "./Card";
import classes from "./CardsList.module.css";
import { nftImagePaths } from "./imagePaths";
import { useEffect, useState } from "react";


function CardsList({Page}) {
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
    <div className={classes.marketContainer}>
      <Link to="/nft-page">
        <div className={classes.marketFlex}>
          <div className={classes.gridCard}>
            {nftImagePaths.slice(0, numCards).map((path, index) => (
              <Card key={index} cardName={'Orbitian'} artistName={'Name Card'} cardImg={path} Page={Page}  />
            ))}
          
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardsList;
