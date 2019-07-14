import React, { Component } from 'react';
import PostsList from '../../components/PostsList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: [],
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({ blogPosts: posts }));
    }
    render() {
        const { blogPosts } = this.state;
        return (
            <div>
                <h1>Home</h1>
                <PostsList blogPosts={blogPosts} />
            </div>
        )
    }
}

export default Home;