import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';

export default class SecondPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  

  renderToolbar() {
    const backButton = route.hasBackButton
      ? <BackButton onClick={this.handleClick.bind(this, navigator)}>Back</BackButton>
      : null;    
    return (
      <Toolbar>
        <div className="left">{backButton}</div>
        <div className="center">Another page</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page key="pageSecondPage" renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this)}>Push page</Button>
          <Button onClick={this.popPage.bind(this)}>Pop page</Button>
        </p>
      </Page>
    );
  }
}