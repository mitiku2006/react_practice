import React from "react";
import classes from "./ProductDetail.module.css";

const ProductDetail = (props) => {
    return (
        <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
                {props.data.colorOptions.map((item, pos) => {
                    return <img key={pos} className={item.imageUrl === props.currentPreviewImage ?
                                [classes.ProductImage, classes.SelectedProductImage].join(' ') :
                                classes.ProductImage}
                                onClick={() => props.onImageClicked(pos)}
                                src={item.imageUrl} alt={item.styleName}/>
                })}
            </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
                <button className={!props.showHeartBeat ?
                        [classes.ButtonFeature, classes.ButtonFeatureSelected].join(' ') :
                        classes.ButtonFeature}
                    onClick={() => props.onTimeClick()}>Time</button>
                <button className={props.showHeartBeat ?
                        [classes.ButtonFeature, classes.ButtonFeatureSelected].join(' ') :
                        classes.ButtonFeature}
                    onClick={() => props.onHeartClick()}>Heart Beat</button>
            </div>
            <div>
                <button className={classes.PrimaryButton}>
                    Buy Now
                </button>
            </div>

        </div>
    )
}

export default ProductDetail;
