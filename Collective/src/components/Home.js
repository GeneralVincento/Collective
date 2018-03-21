import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';

class Home extends Component {


  renderCollectiveName() {
    return (
      <CardSection>
        <Text>You are part of collective: </Text>
        <Text style={{ fontWeight: 'bold' }}>{this.props.collectiveName}</Text>
      </CardSection>
    );
  }

  renderCollectiveId() {
    return (
      <CardSection>
        <Text>with Collective ID: </Text>
        <Text style={{ fontWeight: 'bold' }}>{this.props.collectiveId}</Text>
      </CardSection>
    );
  }

  renderOtherUsers() {
    return (
      <CardSection>
        <Text>with Other users in collective: </Text>
        <Text style={{ fontWeight: 'bold' }}>{this.props.otherUsers}</Text>
      </CardSection>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text>Welcome, </Text>
          <Text style={{ fontWeight: 'bold' }}>{this.props.user.email}</Text>
        </CardSection>

        {this.renderCollectiveName()}

        {this.renderCollectiveId()}

        {this.renderOtherUsers()}

      </Card>
    );
  }
}

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(Home);
