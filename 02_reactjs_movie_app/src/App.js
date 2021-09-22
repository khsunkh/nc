import React from 'react'


// function Movie(props) {
//   return (
//     <h1> I like {props.title}</h1>
//   );
// }
const movieList = [
  {
    title: "Run",
    date: "2020",
    image: "https://upload.wikimedia.org/wikipedia/en/4/45/Run_poster.jpeg"
  },
  {
    title: "The One",
    date: "2001",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fc/TheOnefilm.jpg"
  },
  {
    title: "The Show",
    date: "2017",
    image: "https://upload.wikimedia.org/wikipedia/en/8/88/The_Show_2017_poster.jpg"
  }
]

function Movie( { title, date, image } ) {
  return (
    <div>
      <h1>Title: {title}</h1>
      <h2>Date : {date}</h2>
      <img src={image} />
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <h1>GHello!!!!!</h1>
//       <Movie title="Run" date="2021.01.03"/>
//       <Movie title="The One" date="2021.01.04"/>
//       <Movie title="Last Kingdom" date="2021.01.05"/>
//       <Movie title="Show" date="2021.01.06"/>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1>GHello!!!!!</h1>
      {movieList.map( movie => <Movie title={movie.title} date={movie.date} image={movie.image}/> )}
    </div>
  );
}
export default App;
