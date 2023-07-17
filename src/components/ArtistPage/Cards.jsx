import Card from "../UI/Card";
import classes from "./Cards.module.css";
import { nftImagePaths } from "../UI/imagePaths";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Cards() {
  
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
          <div className={classes.gridCard}>
            {nftImagePaths
              .slice(0, numCards)
              .map((path, index) => (
                  <Link to='/nft-page'><Card key={index} cardImg={path} /></Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
