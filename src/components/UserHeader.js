import React from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ user }) => {
  if (!user) {
    return <div className="Header">Loading...</div>;
  }
  return <div className="Header">{user.name}</div>;
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.userId),
});

export default connect(mapStateToProps)(UserHeader);
