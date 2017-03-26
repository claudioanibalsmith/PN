import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {Page} from 'react-onsenui';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class ShowDetail extends React.Component {

  constructor(props) {
    super(props);
  }
  pushPage(componentPage) {
    this.props.navigator.pushPage({component: componentPage});
  }

  popPage() {
    this.props.navigator.popPage();
  }


  render() {
    return (
    <Page>
      <MuiThemeProvider>
    <Card>
    <CardMedia
      overlay={<CardTitle title="El Calafate" subtitle="Argentina" />} style={{height:200}}>
      <img src="images/calafate.jpg" style={{height:200}}/>
    </CardMedia>
    <CardTitle title="El Calafate" subtitle="Ciudad en Argentina" />
    <CardText>
     El Calafate, llamado popularmente Calafate, es una ciudad ubicada en la ribera meridional del lago Argentino, en la región de la Patagonia, en la provincia de Santa Cruz, 
     Argentina, a unos 80 km del glaciar Perito Moreno. 
    </CardText>
    <CardActions>
      <FlatButton label="Imagenes" />
      <FlatButton label="Historia" />
    </CardActions>
  </Card>
   </MuiThemeProvider>
      </Page>
    );
  }
}


