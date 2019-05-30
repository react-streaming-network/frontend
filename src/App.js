import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { fetchChannels } from './store/actions/ChannelActions.js';
import Home from './containers/home-page';
import Watch from './containers/watch-page';

class App extends React.Component {
  componentDidMount(){
    this.props.fetchChannels();
    this.startFetchingChannels();
    this.requestNotificationPermissions();
  }

  startFetchingChannels = () => {
    this.fetchingInterval = setInterval(() => {
      this.props.fetchChannels();
    }, 10000)
  }

  requestNotificationPermissions(){
    if (Notification.permission === "granted"){
      console.log('Notifications enabled')
    }else if (Notification.permission !== 'denied'){
      Notification.requestPermission(permission => {
        if(permission === "granted"){
          toast.success('Notifications successfully implemented')
        }
      })
    }
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
