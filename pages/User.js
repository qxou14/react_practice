import React from "react";
import Link from "next/link";
import Script from "next/script";

//getStaticProps
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      show_info: 0,
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

  // mouseEnter = (id) => {
  //   this.setState({
  //     show_info: 1,
  //   });
  // };

  // mouseLeave = () => {
  //   this.setState({
  //     show_info: 0,
  //   });
  // };

  render() {
    var { List } = this.state;
    var { show_info } = this.state;

    return (
      <div>
        <h1>{show_info}</h1>
        {List.map((user) => (
          <p className="pointer">
            <Link href={"/Details/" + user.id} key={user.id}>
              <b
                className="color"
              >
                {user.name}
              </b>
            </Link>
            
            <hr></hr>
          </p>
        ))}
      </div>
    );
  }
}

export default User;
