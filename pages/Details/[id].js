import React, { useState } from "react";
import Post from "./Post";
import Albums from "./Albums";

function Details(user) {
  const [post, setPost] = useState(0);
  const [alb, setAlb] = useState(0);
  return (
    <div>
      <h2>Profile:</h2>
      <h3>ID: {user.id} </h3>
      <h3>name: {user.name}</h3>
      <h3>email: {user.email}</h3>
      <h3>
        Address: {user.address.street}, {user.address.suite},{" "}
        {user.address.city}, {user.address.zipcode}{" "}
      </h3>
      <h3>Phone: {user.phone} </h3>
      <h3>Website: {user.website} </h3>
      <hr></hr>

      <h2>Posts:</h2>
      {post == 1 ? <Post id={user.id} /> : null}
      {post == 0 ? (
        <input type="submit" value="post" onClick={() => setPost(1)} />
      ) : null}

      <hr></hr>
      <h2>Albums:</h2>
      {alb == 1 ? <Albums id={user.id} /> : null}
      {alb == 0 ? (
        <input type="submit" value="post" onClick={() => setAlb(1)} />
      ) : null}
    </div>
  );
}

//determine which key is pre render
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
//we get the id of the students
//pre render the page the page using the id we got
export async function getStaticProps({ params }) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + params.id
  );
  const user = await res.json();

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: user,
  };
}
export default Details;