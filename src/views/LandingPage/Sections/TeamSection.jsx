import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// import Card from "components/Card/Card.jsx";
// import CardBody from "components/Card/CardBody.jsx";
// import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import priscribing_pharmacist from "assets/img/medxdrugs/priscribing_pharmacist.jpg"
import compounding from "assets/img/medxdrugs/compounding.png"
import medication_review from "assets/img/medxdrugs/medication_review.jpg"
import compliance_packaging from "assets/img/medxdrugs/compliance_packaging.jpg"
import tobacco_cessation from "assets/img/medxdrugs/tobacco_cessation.jpg"
import travel_health_consultation from "assets/img/medxdrugs/travel_health_consultation.jpg"
import immunization from "assets/img/medxdrugs/immunization.jpg"
import supplements from "assets/img/medxdrugs/supplements.jpg"
import home_health_care from "assets/img/medxdrugs/home_health_care.jpg"

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div id="Services" className={classes.section} style={{ padding: '70px 0 0 0' }}>
        <h2 className={classes.title}>Services</h2>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <GridContainer style={{ maxWidth: "1350px" }}>
          <GridItem style={{ display: "flex", justifyContent: "center" }} xs={12} sm={6} md={6} lg={4}>
              <Card className={` ${classes.card} ${classes.serviceCard} `}>
                <CardMedia
                  className={classes.media}
                  style={{ minHeight: "250px", backgroundSize: "cover" }}
                  image={priscribing_pharmacist}
                  title="Paella dish"
                />
                <CardContent>
                <h4 className={classes.cardTitle}>
                  Prescribing Pharmacist
                </h4>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem style={{ display: "flex", justifyContent: "center" }} xs={12} sm={6} md={6} lg={4}>
              <Card className={` ${classes.card} ${classes.serviceCard} `}>
                <CardMedia
                  className={classes.media}
                  style={{ minHeight: "250px", backgroundSize: "cover" }}
                  image={compounding}
                  title="Paella dish"
                />
                <CardContent>
                <h4 className={classes.cardTitle}>
                  Compouding
                </h4>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem style={{ display: "flex", justifyContent: "center" }} xs={12} sm={6} md={6} lg={4}>
              <Card className={` ${classes.card} ${classes.serviceCard} `}>
                <CardMedia
                  className={classes.media}
                  style={{ minHeight: "250px", backgroundSize: "cover" }}
                  image={medication_review}
                  title="Paella dish"
                />
                <CardContent>
                <h4 className={classes.cardTitle}>
                  Medication Review
                </h4>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem style={{ display: "flex", justifyContent: "center" }} xs={12} sm={6} md={6} lg={4}>
              <Card className={` ${classes.card} ${classes.serviceCard} `}>
                <CardMedia
                  className={classes.media}
                  style={{ minHeight: "250px", backgroundSize: "cover" }}
                  image={compliance_packaging}
                  title="Paella dish"
                />
                <CardContent>
                <h4 className={classes.cardTitle}>
                   Compliance Packaging
                </h4>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem style={{ display: "flex", justifyContent: "center" }} xs={12} sm={6} md={6} lg={4}>
              <Card className={` ${classes.card} ${classes.serviceCard} `}>
                <CardMedia
                  className={classes.media}
                  style={{ minHeight: "250px", backgroundSize: "cover" }}
                  image={tobacco_cessation}
                  title="Paella dish"
                />
                <CardContent>
                <h4 className={classes.cardTitle}>
                  Tobacco Cessation
                </h4>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem style={{ display: "flex", justifyContent: "center" }} xs={12} sm={6} md={6} lg={4}>
              <Card className={` ${classes.card} ${classes.serviceCard} `}>
                <CardMedia
                  className={classes.media}
                  style={{ minHeight: "250px", backgroundSize: "cover" }}
                  image={travel_health_consultation}
                  title="Paella dish"
                />
                <CardContent>
                <h4 className={classes.cardTitle}>
                   Travel Health Consultation
                </h4>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem style={{ display: "flex", justifyContent: "center" }} xs={12} sm={6} md={6} lg={4}>
              <Card className={` ${classes.card} ${classes.serviceCard} `}>
                <CardMedia
                  className={classes.media}
                  style={{ minHeight: "250px", backgroundSize: "cover" }}
                  image={immunization}
                  title="Paella dish"
                />
                <CardContent>
                <h4 className={classes.cardTitle}>
                  Immunization
                </h4>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem style={{ display: "flex", justifyContent: "center" }} xs={12} sm={6} md={6} lg={4}>
              <Card className={` ${classes.card} ${classes.serviceCard} `}>
                <CardMedia
                  className={classes.media}
                  style={{ minHeight: "250px", backgroundSize: "cover" }}
                  image={supplements}
                  title="Paella dish"
                />
                <CardContent>
                <h4 className={classes.cardTitle}>
                  Supplements
                </h4>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem style={{ display: "flex", justifyContent: "center" }} xs={12} sm={6} md={6} lg={4}>
              <Card className={` ${classes.card} ${classes.serviceCard} `}>
                <CardMedia
                  className={classes.media}
                  style={{ minHeight: "250px", backgroundSize: "cover" }}
                  image={home_health_care}
                  title="Paella dish"
                />
                <CardContent>
                <h4 className={classes.cardTitle}>
                  Home health Care
                </h4>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardContent>
              </Card>
            </GridItem>

          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
