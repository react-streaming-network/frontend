import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchChannels } from './store/actions/ChannelActions.js';
import Home from './containers/home-page';
import Watch from './containers/watch-page';

class App extends React.Component {
  componentDidMount(){
    this.props.fetchChannels();
    this.startFetchingChannels();
  }

  startFetchingChannels = () => {
    this.fetchingInterval = setInterval(() => {
      this.props.fetchChannels();
    }, 10000)
  }

  render() {
    return(
      <>
        <Route exact path="/" component={Home}/>
        <Route exact path="/watch" component={Watch}/>
      </>
    )
  }
}

export default connect(
  null,
  {
    fetchChannels
  }
)(App);
