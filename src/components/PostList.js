import React from 'react';
import { fetchPostUser } from '../actions';
import { connect } from 'react-redux';
import Post from './Post';

class PostList extends React.Component {
  componentDidMount() {
    const { fetchPostUser } = this.props;
    fetchPostUser()
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
  users: state.users,
});

export default connect(mapStateToProps, { fetchPostUser })(PostList);
