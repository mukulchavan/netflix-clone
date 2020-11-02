import React, { useEffect } from "react";
import "./App.css";
import Row from "./Row/Row";
import reqests from "./requests";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="app">
      {/* Nav bar */}
      <Nav />
      {/* Banner */}
      <Banner />
      <Row
        title="Netflix Original"
        fetchURL={reqests.fetchNetflixOriginals}
        isLargeRow="true"
      />
      <Row title="Trending Now" fetchURL={reqests.fetchTrending} />
      <Row title="Top Rated" fetchURL={reqests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={reqests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={reqests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={reqests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={reqests.fetchRomanceMovies} />
      <Row title="Documentries" fetchURL={reqests.fetchDocumentries} />
    </div>
  );
}

export default App;
