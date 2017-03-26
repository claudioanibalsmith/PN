import React from 'react';
import ReactDOM from 'react-dom';
import {Navigator} from 'react-onsenui';

import MainPage from './MainPage'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends React.Component {
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  }

  render() {
    return (
      <Navigator initialRoute={{component: MainPage}} renderPage={this.renderPage} />
    );
  }
}