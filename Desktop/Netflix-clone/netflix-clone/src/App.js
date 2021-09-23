import "./App.css";
import Row from "./Row";
import req from "./requests";

function App() {
  return (
    <div className="App">
      {/* NAVBAR */}

      {/* Banner */}

      <Row title="Trending Now" Url={req.trending}></Row>

      <Row title="Most Watched " Url={req.trending}></Row>

      <Row title="Toprated " Url={req.trending}></Row>

      <Row title="Facourites " Url={req.trending}></Row>
      <Row title="This week hits " Url={req.trending}></Row>
    </div>
  );
}

export default App;
