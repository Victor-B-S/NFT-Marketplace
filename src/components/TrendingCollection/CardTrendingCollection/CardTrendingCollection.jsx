import classes from "./CardTrendingCollection.module.css";

function CardTrendingCollection(props) {
    return (
      <>
        <div className={classes.cardTrending}>
          <div className={classes.cardTrendingDogContainer}>
            {/* imagem "dog.png" acima das imagens adicionais */}
            {props.dogImage && (
              <img
                className={classes.cardTrendingImage}
                src={props.dogImage}
                alt=""
              />
            )}
            <div className={classes.additionalImagesContainer}>
              {/* imagens adicionais em colunas abaixo da imagem "dog.png" */}
              {props.additionalImage && (
                <img
                  className={classes.cardTrendingImage}
                  src={props.additionalImage}
                  alt=""
                />
              )}
              {props.additionalImage2 && (
                <img
                  className={classes.cardTrendingImage}
                  src={props.additionalImage2}
                  alt=""
                />
              )}
              {props.additionalImage3 && (
                <img
                  className={classes.cardTrendingImage}
                  src={props.additionalImage3}
                  alt=""
                />
              )}
            </div>
            <div className={classes.cardTrendingTitle}>
                <h3>{props.title}</h3>
            </div>
            <div className={classes.cardTrendingIconContainer}>
                <img
                className={classes.cardTrendingIcon}
                src={props.image}
                alt=""
                />
                <p className={classes.cardTrendingDescription}>{props.description}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default CardTrendingCollection;