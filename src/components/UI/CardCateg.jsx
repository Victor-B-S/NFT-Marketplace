import classes from "./CardCateg.module.css";
import { iconPathsCategories } from "../UI/imagePaths";
import { Link } from "react-router-dom";

function CardCateg(props) {
  const imagem = {
    backgroundImage: `url(${props.categImages})`,
  }

  const renderIcons = () => {
    const icons = [];

    iconPathsCategories.forEach((iconPathCategories, index) => {
      const caminho = { backgroundImage: `url(${iconPathCategories})` }
      if (index === props.numero) {
        icons.push(<div className={classes.cardIcon} style={caminho} key={index}></div>);
      }
    });
    return icons;
  };

  return (
    <>
      <div className={classes.cardCateg}>
        <Link to="/marketplace">
          <div className={classes.cardImages}>
            <div style={imagem} className={classes.cardImage}>
              <div className={classes.cardBlur}>
                {renderIcons()}
              </div>
            </div>
          </div>
          <h5>{props.title}</h5>
        </Link>
      </div>
    </>
  );
}

export default CardCateg;