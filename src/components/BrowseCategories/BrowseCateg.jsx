import classes from "./BrowseCateg.module.css";
import { imagePaths } from "../UI/imagePaths";
import CardCateg from "../UI/CardCateg";

function Browse() {
  const titles = ["Art", "Collectibles", "Music", "Photography", "Video", "Utility", "Sport", "Virtual Worlds"];
 
  const renderDivs = () => {
    const divs = [];

    imagePaths.forEach((imagePath, index) => {
      const numero = index;

      divs.push(
        <CardCateg key={index} categImages={imagePath} numero={numero} title={titles[index % titles.length]} />
      );
    });
    return divs;
  };



  return (
    <>
      <section className={classes.bcategContainer}>
        <h3>Browse Categories</h3>
        <div className={classes.bcategFlex}>
          <div className={classes.gridCard}>
            {renderDivs()}
          </div>
        </div>
      </section>
    </>
  );
}

export default Browse;