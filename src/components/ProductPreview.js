import React, {Component} from "react";
import classes from "../css/ProductPreview.module.css";

class ProductPreview extends Component {
    constructor(props) {
        super();
    }
    render() {
        const hours = new Date().getHours() <= 9 ? `0${new Date().getHours()}` : new Date().getHours();
        const minutes = new Date().getMinutes() <= 9 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
       return ( <div className={classes.ProductPreview}>
            <img src={this.props.imgUrl} alt={"Product Preview"}/>
            <div className={classes.TimeSection}>
                <p>{`${hours}:${minutes}`}</p>
            </div>

            {/*<div className={classes.HeartBeatSection}>*/}
            {/*    <i className="fas fa-heartbeat"></i>*/}
            {/*    <p>78</p>*/}
            {/*</div>*/}
        </div>
       )
    }
}

export default ProductPreview;
