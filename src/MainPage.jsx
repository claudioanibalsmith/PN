import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Splitter,SplitterSide,SplitterContent, Toolbar,ToolbarButton,Tab,Tabbar,Icon,List,ListItem } from 'react-onsenui';

import SecondPage from './SecondPage'

export default class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.styles = {
    
    };
  }


  pushPage(navigator) {
    this.navigator.pushPage({
        hasBackButton: true
    });

    index++;
  }


  show() {
    this.setState({
      isOpen: true
    });
  }

  hide() {
    this.setState({
      isOpen: false
    });
  }


  render() {
    return (
     <Splitter>
     <SplitterSide
     style={{
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    }}
    side='left'
    width={200}
    collapse={true}
    isSwipeable={true}
    isOpen={this.state.isOpen}
    onClose={this.hide.bind(this)}
    onOpen={this.show.bind(this)}
    >
    <Page key="pageList">
    <List
    dataSource={['Inicio', 'Parques', 'Contacto']} 
    renderRow={(title) => (
      <ListItem key={title} onClick={this.pushPage.bind(this)} tappable>{title}</ListItem>
      )}
    />
    </Page>
    </SplitterSide>
    <SplitterContent>
    <Page key="pageHome">
    <Toolbar modifier="noshadow" style={{backgroundColor: '#ffcc00'}}>
    <div className="left">
    <ToolbarButton onClick={this.show.bind(this)}>
    <Icon icon="md-menu"></Icon>
    </ToolbarButton>
    </div>
    <div className="center">Parques Nacionales</div>
    <div className="right">
    <ToolbarButton>
    <Icon icon="md-search"></Icon>
    </ToolbarButton>
    <ToolbarButton>
    <Icon icon="md-more-vert"></Icon>
    </ToolbarButton>
    </div>
    </Toolbar>
    <section style={{margin: '16px'}}>
    <p>
    Swipe right to open the menu.
    </p>
    </section>
    </Page>
    </SplitterContent>
    </Splitter>
    );
  }
}