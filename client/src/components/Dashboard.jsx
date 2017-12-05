import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Chat from './Chat';

const Dashboard = ({ secretData }) => (
  <Card className="container">
    {/*<CardTitle*/}
      {/*className="Card-title"*/}
      {/*title="Dashboard"*/}
      {/*subtitle="You should get access to this page only after authentication."*/}
    {/*/>*/}
    <Chat />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
