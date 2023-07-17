import classes from "./TrendingCollection.module.css";
import CardTrendingCollection from "./CardTrendingCollection/CardTrendingCollection";
import imageMrFox from "../../images/Icons/mr-fox.svg"
import imageShraamie from "../../images/Icons/shraamie.svg"
import imageBeKind2Robots from "../../images/Icons/kind-robots.svg"
import bearImage from "../../images/bear.png"
import catImage from "../../images/cat.png"
import dogImage from "../../images/dog.png"
import numberImage from "../../images/number.png"
import mushroomImage from "../../images/mushroom.png"
import mush2Image from "../../images/mushroom2.png"
import mush3Image from "../../images/mushroom3.png"
import machineImage from "../../images/machine.png"
import machine2Image from "../../images/machine2.png"
import machine3Image from "../../images/machine3.png"

function TrendingCollection() {
    return (
    <>
      <div className={classes.trendingContainer}>
        <div>
          <h3 className={classes.trendingTitle}>Trending Collection</h3>
          <p className={classes.trendingDescription}>Checkout our weekly updated trending collection.</p>
        </div>
        <div className={classes.imagesIcon}>
            <div className={classes.trendingLowFlex}>
                <CardTrendingCollection 
                  dogImage={dogImage} 
                  additionalImage={bearImage}
                  additionalImage2={catImage}
                  additionalImage3={numberImage}
                  title={"DSGN Animals"} 
                  image={imageMrFox} 
                  description={"Mr Fox"}
                  className="dog-card" 
                />
                <CardTrendingCollection 
                  mushroomImage={mushroomImage} 
                  additionalImage={mush2Image}
                  additionalImage2={mush3Image}
                  additionalImage3={numberImage}
                  title={"Magic Mushrooms"} 
                  image={imageShraamie}  
                  description={"Shroomie"} 
                />
                <CardTrendingCollection 
                  machineImage={machineImage} 
                  additionalImage={machine2Image}
                  additionalImage2={machine3Image}
                  additionalImage3={numberImage}
                  title={"Disco Machines"} 
                  image={imageBeKind2Robots}  
                  description={"BeKind2Robots"}
                /> 
            </div>
        </div>
      </div>
    </>
  );
}
  
export default TrendingCollection;