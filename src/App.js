
import classes from './App.module.css';
import ProductData from "./util/ProductData";
import ProductPreview from "./components/ProductPreview/ProductPreview";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Topbar from "./components/Topbar/Topbar";
import {Component} from "react";

class App extends Component {
    state = {
        productData: ProductData,
        currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
        showHeartBeatsSection: true,
        visible: false,
    }
    onHeartClick = () => {
        this.setState({showHeartBeatsSection : true})
    }

    onTimeClick = () => {
        this.setState({showHeartBeatsSection : false})
    }

    onImageClicked = (pos) => {
        const clickedImage = this.state.productData.colorOptions[pos].imageUrl;
        this.setState({currentPreviewImage: clickedImage});
    }

    showDrawer = () => {
        console.log(this.state.visible);
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
     render() {
         return (
             <div className="App">
                 <Topbar/>
                 <div className={classes.MainContainer}>
                     <ProductPreview imgUrl={this.state.currentPreviewImage}
                                     showHeartBeat={this.state.showHeartBeatsSection}/>
                     <ProductDetail data={this.state.productData} onHeartClick={this.onHeartClick}
                                    onTimeClick={this.onTimeClick} onImageClicked={this.onImageClicked}
                                    currentPreviewImage={this.state.currentPreviewImage}
                                    showHeartBeat={this.state.showHeartBeatsSection}
                                    onCloseClick={this.onClose}
                                    showDrowerClick={this.showDrawer}
                                    visible={this.state.visible}
                        />
                 </div>
             </div>
         );
     }


}

export default App;
