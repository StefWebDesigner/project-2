import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import DataStore from "./dataStore/dataStore";
import {useState} from "react";

//ALL IMPORTED COMPONENTS
import Home from "./components/home/Home";

import Activities from "./components/games/Activities";
import Events from "./components/events/Events";
import Register from "./components/userRelated/register/Register";
import LoginUser from "./components/userRelated/LoginUser";
import MatchingGame from './components/games/matchingGame/MatchingGame';
import Hangman from './components/games/hangman/Hangman';
import Quizzes from './components/games/quizzes/Quizzes';
import ColorQuiz from './components/games/quizzes/colors/ColorQuiz';


function SearchResult() {
    return null;
}

function App() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
      <DataStore.Provider
        value={{user, setUser}}
      >
          <Router>
              <Routes>

                  {/* ALL MAIN NAV ROUTES */}
                  <Route path="/" element={<Home/>}/>
                  <Route path="/search" element={<SearchResult/>}/>
                  <Route path="/login" element={<LoginUser/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/activities" element={<Activities/>}/>

                  <Route path="/events" element={<Events/>}/>
                  {/* GAME ROUTES */}
                  <Route path="/matchingGame" element={<MatchingGame/>}/>
                  <Route path="/hangman" element={<Hangman/>}/>
                  <Route path="/quizzes" element={<Quizzes/>}/>
                  <Route path="/colorQuiz" element={<ColorQuiz/>}/>


              </Routes>
          </Router>
      </DataStore.Provider>
  );
}

export default App;
