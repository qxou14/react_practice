import React from "react";


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + this.props.id)
      .then((res) => res.json())
      .then((data) => {
    
        this.setState({
          posts: data,
        });
      });
  }

  render() {
    var { posts } = this.state;

    return (
      <div>
        {posts.map((post) => (
          <ul>
            <li>ID: {post.id}</li>
            <li>Title: {post.title}</li>
            <li>Comment: {post.body}</li>
          </ul>
        ))}
      </div>
    );
  }
}
export default Post;
