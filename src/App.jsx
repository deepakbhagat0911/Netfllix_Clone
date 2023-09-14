import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Footer from "./Components/footer/Footer";
import AllShow from "./Components/movieGrid/AllShow";
import DetailView from "./Components/Detailview/DetailView";
import MyList from "./Components/My_List/MyList";
import Subscription from "./Components/subscription/Subscription";
import Registration from "./Components/subscription/Registration";
import Search from "./Components/movieGrid/Search";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/all" element={<AllShow />} />
          <Route path="/:id" element={<DetailView />} />
          <Route path="/list" element={<MyList />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/search" element={<Search />} />
          <Route path="/video/:url" element={<VideoPlayer />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
