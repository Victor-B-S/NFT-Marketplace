import classes from "./CardHowItWorks.module.css";
import cardImage from "./create.svg"

function CardHowItWorks(props) {
  return (
    <>
        <div className={classes.cardHiw}>
          <div className={classes.cardIcons}>
            <img src={cardImage} alt="" />
          </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </>
  );
}

export default CardHowItWorks;