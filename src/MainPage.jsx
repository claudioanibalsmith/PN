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

  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  renderToolbar() {
    return (
    <Toolbar modifier="noshadow">
      <div className="left">
        <ToolbarButton onClick={this.show}>
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
    );
  }

  hide() {
    this.setState({isOpen: false});
  }

  show() {
    this.setState({isOpen: true});
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
          onClose={this.hide}
          onOpen={this.show}
        >
          <Page renderToolbar={this.renderToolbar}>
            <List
              dataSource={['Profile', 'Followers', 'Settings']} 
              renderRow={(title) => (
                <ListItem key={title} onClick={this.hide} tappable>{title}</ListItem>
              )}
            />
            <p style={{textAlign: 'center'}}>
              <Button onClick={this.pushPage.bind(this)}>Push page</Button>
            </p>
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page renderToolbar={this.renderToolbar}>
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