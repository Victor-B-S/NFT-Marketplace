import classes from "./BrowseCateg.module.css";
import { imagePaths } from "../UI/imagePaths";
import { useEffect, useState } from "react";
import CardCateg from "./CardCategory/CardCateg";

function BrowseCategory() {
    const [numCards, setNumCards] = useState(8);
    useEffect(() => {
      const handleResize = () => {
        if(window.innerWidth <= 480){
          setNumCards(2);
        }else if((window.innerWidth <= 768) && (window.innerWidth > 480)){
          setNumCards(8);
        }else{
          setNumCards(8);
        }
    }; 
  
    window.addEventListener('resize', handleResize);
    handleResize(); 
  
    return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const titles = ["Art", "Collectibles", "Music", "Photography", "Sport", "Utility", "Video", "Virtual Worlds"];
  
    return (
    <>
      <div className={classes.bcategContainer}>
        <div className={classes.bcategTitle}>
          <h3>Browse Categories</h3>
        </div>
        <div className={classes.bcategFlex}>
          <div className={classes.gridCard}>
            {imagePaths
              .slice(0, numCards)
              .map((path, index) => (
              <CardCateg key={index} categImages={path} title={titles[index % titles.length]} />
            ))}        
          </div>
        </div>
      </div>
    </>
  );
}
  
export default BrowseCategory;