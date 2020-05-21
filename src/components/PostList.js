import React from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

class PostList extends React.Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts()
  }

  render() {
    return (
      <div>Post List</div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
