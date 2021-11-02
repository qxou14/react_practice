import React from "react";
import Link from "next/link";
//getStaticProps
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        //this gives us the object
        this.setState({
          List: data,
        });
      });
  }

  render() {
    var { List } = this.state;

    return (
      <div>
        {List.map((user) => (
          <p className="pointer">
          <Link href={"/Details/" + user.id} key={user.id}>
            <b className="color">{user.name}</b>
          </Link>
          <hr></hr>
          </p>
        ))}
      </div>
    );
  }
}

export default User;
