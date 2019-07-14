import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class PostsList extends Component {
  render () {
    return (
      <ul>
        {this.props.blogPosts.map(post => {
          return (
            <li key={post.id}>
                <Link to={`/article/${post.id}`} >
                    {post.title}
                </Link>
            </li>
            )
        })}
      </ul>
    );
  }
}

export default PostsList;