import classes from "./CardCateg.module.css";

function CardCateg(props) {
  return (
    <>
      <div className={classes.cardCateg}>
        <div className={classes.cardImages}>
          <img src={props.categImages} alt="" />
        </div>
        <h5>{props.title}</h5>
      </div>
    </>
  );
}

export default CardCateg;