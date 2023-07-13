import classes from "./CardCateg.module.css";
import cardcImg from "../../images/category-art.png";

function CardCateg() {
  return (
    <>
      <div className={classes.cardCateg}>
        <img src={cardcImg} alt="" />
        <h4 className={classes.categoryTitle}>Art</h4>
      </div>
    </>
  );
}

export default CardCateg;