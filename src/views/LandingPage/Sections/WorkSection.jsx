import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Location from "@material-ui/icons/LocationOn";
import AccessTime from "@material-ui/icons/AccessTime";

// core components
import Card from "components/Card/Card.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CardBody from "components/Card/CardBody.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id='ContactUs' className={classes.section} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 className={classes.title}>Contact Us</h2>
        <GridContainer justify="center" style={{ maxWidth: "1350px"}}>
          <GridItem cs={12} sm={12} md={6} lg={6}>
            <GridContainer justify="center" style={{ padding: "0 72px" }}>
              <GridItem cs={12} sm={6} md={6} lg={6}>
                <Card plain>
                  <CardBody style={{ padding: "unset" }}>
                    <Location />
                    <h3 className={classes.description} style={{ textAlign: 'left', marginTop: '10px', marginBottom: '10px' }}>
                      Location
                    </h3>
                    <h5 className={classes.description} style={{ textAlign: 'left'}}>
                      <b> 10306 95 St NW, <br/> 
                      Edmonton, AB T5H 2B5 <br/>
                      </b>
                      <a href="#"> info@medxdrugs.ca </a> <br/>
                      Phone: 7802503545 <br/>
                      Fax: 7802503544 <br/>
                    </h5>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem cs={12} sm={6} md={6} lg={6}>
                <Card plain>
                  <CardBody style={{ padding: "unset" }}>
                    <AccessTime/>
                    <h3 className={classes.description} style={{ textAlign: 'left', marginTop: '10px', marginBottom: '10px' }}>
                      Store Hours
                    </h3>
                    <h5 className={classes.description} style={{ textAlign: 'left'}}>
                      <span> Mon to Fri: </span> 8AM to 7PM <br/>
                      Saturdays: 9AM to 3PM <br/> 
                      Sun & Stats: 9AM to 3PM <br/> 
                    </h5>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
            <Card plain>
                <h4 className={classes.description}>
                  Happy to serve you!!!
                </h4>
            </Card>
          </GridItem>
          <GridItem cs={12} sm={12} md={6}>
            <Card plain style={{ padding: '0 30px' }}>
              <h4 className={classes.description}>
                If you have a question or order query, please get in touch using the contact form or give us a call.
              </h4>
              <form style={{ padding: '0 12px' }} >
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Your Name"
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Your Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <CustomInput
                    labelText="Your Message"
                    id="message"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.textArea
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                  <GridContainer justify="center">
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      className={classes.textCenter}
                    >
                      <Button color="primary">Send Message</Button>
                    </GridItem>
                  </GridContainer>
                </GridContainer>
              </form>  
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
