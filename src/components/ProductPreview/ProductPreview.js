import React from "react";

import classes from "./ProductPreview.module.css";

const ProductPreview = (props) => {
    const hours = new Date().getHours() <= 9 ? `0${new Date().getHours()}` : new Date().getHours();
    const minutes = new Date().getMinutes() <= 9 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
    return (
        <div className={classes.ProductPreview}>
            <img src={props.imgUrl} alt={"Product Preview"}/>
            {props.showHeartBeat ?
                <div className={classes.HeartBeatSection}>
                    <i className="fas fa-heartbeat"></i>
                    <p>78</p>
                </div> :
                <div className={classes.TimeSection}>
                    <p>{`${hours}:${minutes}`}</p>
                </div>
            }
        </div>
    )
}

export default ProductPreview;
