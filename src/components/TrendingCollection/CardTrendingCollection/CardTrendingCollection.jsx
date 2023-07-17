import classes from "./CardTrendingCollection.module.css";

function CardTrendingCollection(props) {
    return (
        <>
            <div className={classes.cardTrending}>
                          {/* Coloque as imagens adicionais acima do ícone e da descrição */}
                <div className={classes.additionalImagesContainer}>
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
                    <img className={classes.cardTrendingIcon}src={props.image} alt="" />
                    <p className={classes.cardTrendingDescription}>{props.description}</p>
                </div>
            </div>
        </>
    );
}

export default CardTrendingCollection;