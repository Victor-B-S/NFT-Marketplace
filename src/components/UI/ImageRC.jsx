/* eslint-disable react/prop-types */

import classes from "./ImageRC.module.css";


function ImageRC(props){
    return (
        <div className={classes.registerBg}>
            <img src={props.img}/>
        </div>
    )
}


export default ImageRC;