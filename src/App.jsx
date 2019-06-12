import React from 'react';
import vk_connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'home',
      fetchedUser: null,
    };
  }

  componentDidMount() {
    vk_connect.subscribe((e) => {
      if (e.detail.type === 'VKWebAppGetUserInfoResult') {
        this.setState({
          fetchedUser: e.detail.data
        });
      } else {
        console.log(e.detail.type);
      }
    });
    vk_connect.send('VKWebAppGetUserInfo', {});
  }

  go = e => this.setState({ activePanel: e.currentTarget.dataset.to });

  render() {
    return (
      <View activePanel = { this.state.activePanel } >
        <Home id = "home" fetchedUser = { this.state.fetchedUser } go = { this.go }/>
        <Persik id = "persik" go = { this.go }/>
      </View>
    );
  }
}

export default App;