import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Toolbar,ToolbarButton,Icon,List,ListItem,Row,Col} from 'react-onsenui';
import {notification} from 'onsenui';

export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.styles = {
      listItem: {
        lineHeight: '1',
        padding: '15px 0px 15px 15px'
      },
      thumbnail:{
        width: '80px',
        height: '80px',
        borderRadius: '4px',
        webkitBorderRadius: '4px'
      },
      name:{
        fontWeight: '500',
        lineHeight: '16px',
        fontSize: '15px',
        marginBottom: '6px'
      },
      location: {
        fontSize: '14px',
        opacity: '0.4',
        marginBottom: '6px'
      },
      desc: {
        lineHeight: '1.2',
        fontSize: '13px'
      }
    };
  }

  handleClick() {
    ons.notification.alert('Hello world!');
  }


  renderToolbar() {
    return (
      <Toolbar>
      <div className='center'>Parques Nacionales</div>
      </Toolbar>
      );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
      <List>
      <ListItem style={this.styles.listItem}>
      <Row>
      <Col>
      <img src='./images/calafate.jpg' style={this.styles.thumbnail}/>
      </Col>
      <Col>
      <div style={this.styles.name}>
      El Calafate
      </div>
      <div style={this.styles.location}>
      <i className='fa fa-map-marker'></i> Datos del Lugar
      </div>
      <div style={this.styles.desc}>
      Descripcion del lugar.
      </div>
      </Col>
      </Row>
      </ListItem>
      <ListItem style={this.styles.listItem}>
      <Row>
      <Col>
      <img src='./images/calafate.jpg' style={this.styles.thumbnail}/>
      </Col>
      <Col>
      <div style={this.styles.name}>
      El Calafate
      </div>
      <div style={this.styles.location}>
      <i className='fa fa-map-marker'></i> Datos del Lugar
      </div>
      <div style={this.styles.desc}>
      Descripcion del lugar.
      </div>
      </Col>
      </Row>
      </ListItem><ListItem style={this.styles.listItem}>
      <Row>
      <Col>
      <img src='./images/calafate.jpg' style={this.styles.thumbnail}/>
      </Col>
      <Col>
      <div style={this.styles.name}>
      El Calafate
      </div>
      <div style={this.styles.location}>
      <i className='fa fa-map-marker'></i> Datos del Lugar
      </div>
      <div style={this.styles.desc}>
      Descripcion del lugar.
      </div>
      </Col>
      </Row>
      </ListItem><ListItem style={this.styles.listItem}>
      <Row>
      <Col>
      <img src='./images/calafate.jpg' style={this.styles.thumbnail}/>
      </Col>
      <Col>
      <div style={this.styles.name}>
      El Calafate
      </div>
      <div style={this.styles.location}>
      <i className='fa fa-map-marker'></i> Datos del Lugar
      </div>
      <div style={this.styles.desc}>
      Descripcion del lugar.
      </div>
      </Col>
      </Row>
      </ListItem><ListItem style={this.styles.listItem}>
      <Row>
      <Col>
      <img src='./images/calafate.jpg' style={this.styles.thumbnail}/>
      </Col>
      <Col>
      <div style={this.styles.name}>
      El Calafate
      </div>
      <div style={this.styles.location}>
      <i className='fa fa-map-marker'></i> Datos del Lugar
      </div>
      <div style={this.styles.desc}>
      Descripcion del lugar.
      </div>
      </Col>
      </Row>
      </ListItem>
      </List>
      </Page>
      );
  }

}

