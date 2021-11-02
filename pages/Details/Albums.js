import React from "react";
import Link from "next/link";

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums?userId=" + this.props.id)
      .then((res) => res.json())
      .then((data) => {
        //this gives us the object
        this.setState({
          albums: data,
        });
      });
  }

  render() {
    var { albums } = this.state;

    return (
      <div>
        {albums.map((album) => (
          <Link href={"/Albums/" + album.id} key={album.id}>
            <ul className="pointer">
              <li className="color" >ID: {album.id}</li>
              <li className="color">Title: {album.title}</li>
            </ul>
          </Link>
        ))}
      </div>
    );
  }
}

export default Albums;
