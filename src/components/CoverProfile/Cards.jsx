import Card from "../UI/Card";
import classes from "./Cards.module.css";
import { imagePaths } from "../UI/imagePaths";
import { useEffect, useState } from "react";

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

export default Cards;
