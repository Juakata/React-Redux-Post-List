import React from 'react';
import UserHeader from './UserHeader';

const Post = ({ post, user }) => (
  <div className="item">
    <i className="large middle aligned icon user" />
    <div className="content">
      <div className="description">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <UserHeader userId={post.userId} />
    </div>
  </div>
);

export default Post;
