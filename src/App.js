import logo from "./logo.svg";
import "./App.css";
// imported Home,upcoming, and reviews components
import Home from "./Components/HomeComp/Home";
import UpcomingShows from "./Components/UpcomingComp/UpcomingShows";
import Reviews from "./Components/ReviewsComp/Reviews";

function App() {
  return (
    <div className="App">
      {/* Home Component */}
      <Home />
      {/* UpComing ShowsComponent */}
      <UpcomingShows />
      {/* Reviews Component */}
      <Reviews />
    </div>
  );
}

export default App;
