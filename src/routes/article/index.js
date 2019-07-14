import React, { Component } from 'react';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }
    componentDidMount() {
        const postId = this.props.match.params.id;
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(post => this.setState({ post }));
    }
    render() {
        const { post } = this.state;
        return (
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        )
    }
}

export default Article;