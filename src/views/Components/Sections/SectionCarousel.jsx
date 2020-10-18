import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      arrows: false,
      fade: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
        <div style={{ height: '500px' }}>
              <Card carousel style={{ marginTop: '0', marginBottom: '0' }}>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                    Going on a vacation? Don’t forget your travel vaccinations. These and regular immunizations, such as flu shots, are part of our every day services.
                    </div>  
                    {/* <div className="slick-sub-caption">
                      
                        Yellowstone
                        National Park, United States
                      
                    </div>   */}
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      
                        Somewhere Beyond,
                        United States
                      
                    </div>
                    {/* <div className="slick-sub-caption">
                      
                        Yellowstone
                        National Park, United States
                      
                    </div>   */}
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      
                        Yellowstone
                        National Park, United States
                      
                    </div>
                    {/* <div className="slick-sub-caption">
                      
                        Yellowstone
                        National Park, United States
                      
                    </div>   */}
                  </div>
                </Carousel>
              </Card>
        </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
