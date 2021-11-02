import React from "react";

function Albums(alb) {
  return (
    <div>
      <img src={alb.url} />
    </div>
  );
}

//determine which key is pre render
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();

  const paths = data.map((alb) => ({
    params: { id: alb.id.toString() },
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
    "https://jsonplaceholder.typicode.com/photos?id=" + params.id
  );
  const alb = await res.json();

  if (!alb) {
    return {
      notFound: true,
    };
  }

  return {
    props: alb[0],
  };
}
export default Albums;
