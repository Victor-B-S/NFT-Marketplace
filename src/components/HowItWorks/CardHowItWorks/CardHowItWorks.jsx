import classes from "./CardHowItWorks.module.css";

function CardHowItWorks(props) {
  return (
    <>
        <div className={classes.cardHiw}>
          <div className={classes.cardIcons}>
            <img src={props.image} alt="" />
          </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </>
  );
}

export default CardHowItWorks;