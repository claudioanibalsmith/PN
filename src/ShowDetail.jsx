import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ShowDetail = () => (
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
);

export default ShowDetail;