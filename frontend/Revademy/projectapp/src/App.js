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
import ForgotPassword from './components/userRelated/ForgotPassword';
import MatchingGame from './components/games/matchingGame/MatchingGame';
import Hangman from './components/games/hangman/Hangman';
import Quizzes from './components/games/quizzes/Quizzes';
import ColorQuiz from './components/games/quizzes/colors/ColorQuiz';
import SoundQuiz from './components/games/quizzes/sound/SoundQuiz';
import AnimalQuiz from './components/games/quizzes/animals/AnimalQuiz';
import AdminMain from "./components/admin/AdminMain";

import ResetPassword from './components/userRelated/ResetPassword';

import Opening from "./components/opening/Opening";
import KidPortal from "./components/kidPortal/KidPortal";
import AdminEmailSupport from "./components/admin/adminSubgroups/adminEmailSupport";
import AdminReport from "./components/admin/adminSubgroups/AdminReport";
import AdminDashBoard from "./components/admin/adminSubgroups/adminDashBoard";
import AdminEvent from "./components/admin/adminSubgroups/AdminEvent";
import UserPortal from './components/userRelated/UserPortal';



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
                  <Route path="/forgotPassword" element={<ForgotPassword/>}/>
                  <Route path="/resetPassword/:id" element={<ResetPassword/>}/>
                  <Route path="/userportal" element={<UserPortal/>}/>

                  <Route path="/events" element={<Events/>}/>
                  <Route path="/adminportal" element={<AdminMain/>}/>

                  {/*ADMIN PORTAL*/}
                  <Route path="/emailsupport" element={<AdminEmailSupport/>}/>
                  <Route path="/reports" element={<AdminReport/>}/>
                  <Route path="/dashboard" element={<AdminDashBoard/>}/>
                  <Route path="/adminevents" element={<AdminEvent/>}/>

                  {/* GAME ROUTES */}
                  <Route path="/matchingGame" element={<MatchingGame/>}/>
                  <Route path="/hangman" element={<Hangman/>}/>
                  <Route path="/quizzes" element={<Quizzes/>}/>
                  <Route path="/colorQuiz" element={<ColorQuiz/>}/>
                  <Route path="/animalQuiz" element={<AnimalQuiz/>}/>
                  <Route path="/soundQuiz" element={<SoundQuiz/>}/>

                  {/* FLOAT IN ANIMATION TEST */}
                  <Route path="/opening" element={<Opening/>}/>
                  <Route path="/kidPortal" element={<KidPortal/>}/>


              </Routes>
          </Router>
      </DataStore.Provider>
  );
}

export default App;
