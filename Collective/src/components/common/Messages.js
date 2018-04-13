import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions';

class Messages extends Component {

  getMessages() {
    const collectiveId = this.props.collectiveId;

    console.log('Hello FEILFEILFEIL!');

    fetchMessages({ collectiveId });


    return (
      <View>
        <Text>collectiveId</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.getMessages()}
      </View>
    );
  }

}


const mapStateToProps = ({
  chat: { isFetching, height } }) =>
  ({ isFetching, height });

export default connect(mapStateToProps)(Messages);