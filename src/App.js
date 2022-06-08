import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyInfo />
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
      </header>
    </div>
  );
}

function MyInfo() {
  const [myName, setMyName] = useState("");
  const [favouriteColour, setFavouriteColour] = useState("");
  const [favouriteMovie, setFavouriteMovie] = useState(["", "", ""]);
  //const renderMyFaveMovie = favouriteMovie.map(movie => (<li>{movie}</li>))

  return (
    <div>
      <p>
        My name is: {myName}
        <br></br>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            const name = event.target.value;
            setMyName(name);
          }}
        ></input>
      </p>

      <p
        style={{
          backgroundColor: favouriteColour,
          borderRadius: "7px",
        }}
      >
        My favourite colour is: {favouriteColour}
        <br></br>
      </p>
      <input
        type="text"
        placeholder="Colour"
        onChange={(event) => {
          const colour = event.target.value;
          setFavouriteColour(colour);
        }}
      ></input>

      <p> My favourite movies are:</p>
      <ol>
        {favouriteMovie.map((movie) => (
          <li>{movie}</li>
        ))}
      </ol>
      <br></br>

      <input
        type="text"
        placeholder="Movie 1"
        onChange={(event) => {
          setFavouriteMovie([
            event.target.value,
            favouriteMovie[1],
            favouriteMovie[2],
          ]);
        }}
      ></input>

      <input
        type="text"
        placeholder="Movie 2"
        onChange={(event) => {
          setFavouriteMovie([
            favouriteMovie[0],
            event.target.value,
            favouriteMovie[2],
          ]);
        }}
      ></input>

      <input
        type="text"
        placeholder="Movie 3"
        onChange={(event) => {
          setFavouriteMovie([
            favouriteMovie[0],
            favouriteMovie[1],
            event.target.value,
          ]);
        }}
      ></input>
    </div>
  );
}

export default App;
