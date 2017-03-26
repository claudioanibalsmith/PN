import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ShowDetail from './ShowDetail';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class GrillaParques extends React.Component {
  constructor(props) {
    super(props);
    this.tilesData = [
    {
      img: './images/calafate.jpg',
      title: 'El Calafate',
      author: 'Argentina',
    },
    {
      img: './images/elchalten.jpg',
      title: 'El chalten',
      author: 'Argentina',
    },
    {
      img: './images/torresdelpaine.jpg',
      title: 'Torres del Paine',
      author: 'Argentina',
    },
    ];
    this.styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
      },
    };
  }

  pushPage(componentPage) {
    this.props.navigator.pushPage({component: componentPage});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  handleClick() {
    this.props.navigator.popPage();
  }


  render() {
    return (
      <Page>
      <MuiThemeProvider>
      <div style={this.styles.root}>
      <GridList
      cellHeight={180}
      style={this.styles.gridList}
      >
      <Subheader>Parque Nacional El Calafate</Subheader>
      {this.tilesData.map((tile) => (
        <GridTile
        key={tile.img}
        title={tile.title}
        subtitle={<span>by <b>{tile.author}</b></span>}
        onClick={this.pushPage.bind(this,ShowDetail)} 
        >
        <img src={tile.img} />
        </GridTile>
        ))}
      </GridList>
      </div>
      </MuiThemeProvider>
      </Page>
      );
  }
}


