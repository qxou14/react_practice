import React from "react";
import Link from "next/link";
//getStaticProps
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
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
          <Link href={"/Details/" + user.id} key={user.id}>
            <h3>{user.name}</h3>
          </Link>
        ))}
      </div>
    );
  }
}

export default User;
