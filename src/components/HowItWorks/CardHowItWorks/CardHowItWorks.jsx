import classes from "./CardHowItWorks.module.css";

function CardHowItWorks(props) {
  return (
    <>
        <div className={classes.cardHiw}>
          <div>
            <img className={classes.cardHiwImage}src={props.image} alt="" />
          </div>
          <div className={classes.cardHiwTextContainer}>
            <div className={classes.cardHiwTitle}>{props.title}</div>
            <p className={classes.cardHiwDescription}>{props.description}</p>
          </div>
        </div>
    </>
  );
}

export default CardHowItWorks;