import React from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import Post from './Post';

class PostList extends React.Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts()
  }

  renderPosts = () => {
    const { posts } = this.props;
    const render = posts.map(post => (
      <Post key={post.id} post={post} />
    ));
    return render;
  }

  render() {
    return (
      <div className="ui relaxed divided list">{this.renderPosts()}</div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
