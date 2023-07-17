import classes from "./CardCateg.module.css";

function CardCateg(props) {
  return (
    <>
      <div className={classes.cardCateg}>
        <div className={classes.cardImages}>
          <img src={props.categImages} alt="" />
        </div>
        <h4>{props.title}</h4>
      </div>
    </>
  );
}

export default CardCateg;