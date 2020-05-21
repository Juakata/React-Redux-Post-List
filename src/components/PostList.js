import React from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

class PostList extends React.Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts()
  }

  renderPosts = () => {
    const { posts } = this.props;
    const render = posts.map(post => (
      <div key={post.id}>{post.body}</div>
    ));
    return render;
  }

  render() {
    return (
      <div>{this.renderPosts()}</div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
