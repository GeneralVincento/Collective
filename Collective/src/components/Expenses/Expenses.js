import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { StatusBarStyle, Header } from '../common';

class Expenses extends Component {
  // renderCollectiveName() {
  //   return (
  //     <View style={{ flex: 1 }}>
  //       <Header backgroundColor='#30C5D2' headerText={this.props.collectiveName} />
  //     </View>
  //   );
  // }
  // <StatusBarStyle />
  //   <View style={{ flexDirection: 'row' }}>
  //     {this.renderCollectiveName()}
  //   </View>

  render() {
    return (
      <View style={{ flex: 1 }}>


      <Text> EXPENSES </Text>

      </View>
    );
  }
}

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(Expenses);
