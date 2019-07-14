import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li{
      margin: 0.4rem 0;
      font-size: 1rem;
      a{ 
        color: #111;
        display: block;
        padding: 0.3rem;
        text-decoration: none;
        &:hover{
            background: pink;
        }
      }

  }
`

class PostsList extends Component {
    static propTypes = {
        blogPosts: PropTypes.array.isRequired,
    };

    static defaultProps = {
        blogPosts: []
    };

    render () {
        return (
        <List>
            {this.props.blogPosts.map(post => {
            return (
                <li key={post.id}>
                    <Link to={`/article/${post.id}`} >
                        {post.title}
                    </Link>
                </li>
                )
            })}
        </List>
        );
  }
}

export default PostsList;