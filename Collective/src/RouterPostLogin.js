import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, View, Animated, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import UpcomingEvents from './components/Events/UpcomingEvents';
import Expenses from './components/Expenses/Expenses';
import Settings from './components/Settings/Settings';


class RouterPostLogin extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Hjem' },
      { key: 'events', title: 'Hendelser' },
      { key: 'expenses', title: 'Oppgjør' },
      { key: 'settings', title: 'Innstillinger' }
    ],
  };

  handleIndexChange = index => this.setState({ index });

  renderScene = SceneMap({
    home: Home,
    events: UpcomingEvents,
    expenses: Expenses,
    settings: Settings
  });

  renderTitle() {
    return (
      <View style={styles.title}>
        <Text style={{ fontSize: 20, color: '#72BA6F' }}>{this.props.collectiveName}</Text>
      </View>
    );
  }


  renderTabBar = props => {
  const inputRange = props.navigationState.routes.map((x, i) => i);

  return (
    <View style={{ backgroundColor: '#f5f5f5' }}>
      {this.renderTitle()}

      <View style={styles.tabBar}>

      {props.navigationState.routes.map((route, i) => {
        const color = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(
            inputIndex => (inputIndex === i ? '#D6356C' : '#222')
          ),
        });
        return (
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => this.setState({ index: i })}
          >
            <Animated.Text style={{ color }}>{route.title}</Animated.Text>
          </TouchableOpacity>
        );
      })}
      </View>
    </View>
  );
};

  render() {
    return (
        <TabView
          navigationState={this.state}
          renderTabBar={this.renderTabBar}
          renderScene={this.renderScene}
          onIndexChange={this.handleIndexChange}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
    );
  }
}

const styles = ({
  container: {
    flex: 1,
  },
  title: {
    paddingTop: 20,
    fontSize: 16,
    alignItems: 'center'
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 4
  },
});

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(RouterPostLogin);
