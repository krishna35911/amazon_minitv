import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row1 from './components/Row1';
import requests from './requests';

function App() {
  return (
    <div>
      <Nav/>
      <Banner isPoster={true} fetchURL={requests.fetchTopRated}/>
      <Row1 title="Blockbuster Dubbed Movies" isPoster={true} fetchURL={requests.fetchNetflixOriginals}/>
      <Row1 title="Trending Top 10 on miniTV" isPoster={true} fetchURL={requests.fetchActionMovies}/>
      <Row1 title="Trending in Dubbed Series" isPoster={true} fetchURL={requests.fetchTrending}/>
      <Row1 title="Romantic shows & mini Movies" isPoster={true} fetchURL={requests.fetchRomanceMovies}/>
      <Row1 title="Popular Web Series" isPoster={true} fetchURL={requests.fetchDocumentaries}/>
      <Row1 title="Classic Hits - Shows we all Love!" isPoster={true} fetchURL={requests.fetchTopRated}/>
      <Row1 title="Horror, Thriller & Mystery" isPoster={true} fetchURL={requests.fetchHorrorMovies}/>
      <Row1 title="Most Loved Videos" isPoster={true} fetchURL={requests.fetchTrending}/>
      <Row1 title="Comedy Dhamaaka" isPoster={true} fetchURL={requests.fetchComedyMovies}/>
    </div>
  );
}

export default App;
