import React from 'react'


// function Movie(props) {
//   return (
//     <h1> I like {props.title}</h1>
//   );
// }

function Movie( { date, title } ) {
  return (
    <h1> I like {title}, {date} </h1>
  );
}

function App() {
  return (
    <div>
      <h1>GHello!!!!!</h1>
      <Movie title="Run" date="2021.01.03"/>
      <Movie title="The One" date="2021.01.04"/>
      <Movie title="Last Kingdom" date="2021.01.05"/>
      <Movie title="Show" date="2021.01.06"/>
    </div>
  );
}

export default App;
