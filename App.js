import './App.css';
import Row from "./components/Row";
import  requests from "./request"
import Baner from "./components/Baner"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="app">
    <Nav/>
    <Baner/>
      <Row title="Original" fetchUrl={requests.fetchNetflixOrginals} isLarge={true}/>
     <Row title="Trending" fetchUrl={requests.fetchTrending}/>
     <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horrer Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentry" fetchUrl={requests.fetchDocumentries}/>
    </div>
  );
}

export default App;
