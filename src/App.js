import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from "./data/ProductData";

function App() {
    // const hours = new Date().getHours() <= 9 ? `0${new Date().getHours()}` : new Date().getHours();
    // const minutes = new Date().getHours() <= 9 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
    return (
        <div className="App">
            <header className={classes.AppHeader}>
                <nav src={logo} className={classes.Topbar}>
                    <img src={"exp-logo.png"} alt={"Expedia Logo"}/>
                </nav>
            </header>
            <div className={classes.MainContainer}>
                <div className={classes.ProductPreview}>
                    <img src={"https://imgur.com/iOeUBV7.png"} alt={"Product Preview"}/>
                    {/*<div className={classes.TimeSection}>*/}
                    {/*    <p>{`${hours}:${minutes}`}</p>*/}
                    {/*</div>*/}

                    <div className={classes.HeartBeatSection}>
                        <i class="fas fa-heartbeat"></i>
                        <p>78</p>
                    </div>
                </div>

                <div className={classes.ProductData}>
                    <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
                    <p className={classes.ProductDescription}>{ProductData.description}</p>
                    <h3 className={classes.SectionHeading}>Select Color</h3>
                    <div>
                        {ProductData.colorOptions.map((item, pos) => {
                            return <img className={pos === 0 ? [classes.ProductImage, classes.SelectedProductImage].join(' ') :
                                classes.ProductImage} src={item.imageUrl} alt={item.styleName}/>
                        })}
                    </div>
                    <h3 className={classes.SectionHeading}>Features</h3>
                    <div>
                        <button className={[classes.ButtonFeature, classes.ButtonFeatureSelected].join(' ')}>Time</button>
                        <button className={classes.ButtonFeature}>Heart Beat</button>
                    </div>
                    <div>
                        <button className={classes.PrimaryButton}>
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
