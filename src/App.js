import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/HomeComp/Home";
import UpcomingShows from "./Components/UpcomingComp/UpcomingShows";
import Reviews from "./Components/ReviewsComp/Reviews";

function App() {
  return (
    <div className="App">
      <Home />
      <UpcomingShows />
      <Reviews />
    </div>
  );
}

export default App;
