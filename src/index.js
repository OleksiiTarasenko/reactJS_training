import React from "react";
import ReactDOM from "react-dom";

const movie = {
  title: "Love",
  vote_average: 5.5,
  image: "https://cdn.collider.com/wp-content/uploads/2011/01/love-movie-poster.jpg",
  overview: "A man spends years alone on a space station orbiting Earth after losing communication with Houston/Earth. Time is spent on maintenance, exercise, watching old messages and reading a journal by a soldier in the American civil war 1864",
};
function Image(props) {
  return <img src = {props.src} alt = {props.alt}/>
}
//function MovieItem(props) {
//  const { data: {title, vote_average, image} } = props;
//  return (
//   <div>
//      <Image src = {image} alt = {title} />
//      <p>{title}</p>
//      <p>{vote_average}</p>
  
//    </div>
//  );
//}

class MovieItem extends React.Component {
  render() {
    const { data: {title, vote_average, image} } = this.props;
  return (
    <div>
      <Image src = {image} alt = {title} />
      <p>{title}</p>
      <p>{vote_average}</p>
  
    </div>
  );
  }
}

function App() {
  return (
    <div>
      <MovieItem data = {movie}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
