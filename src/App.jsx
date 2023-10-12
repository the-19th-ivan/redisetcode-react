import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from "./pages/Map/Map";
import Zone from "./pages/Zone/Zone";
import Stage from "./pages/Stage/Stage";
import Lesson from "./pages/Lesson/Lesson";
import Codelab from "./pages/Codelab/Codelab";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Quest from "./pages/Quest/Quest";
import QuestSession from "./pages/Quest/QuestSession";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile/Profile";
import ServerError from "./pages/ServerError";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/codelab" element={<Codelab />} />
        <Route path="/zone" element={<Zone />} />
        <Route path="/stage" element={<Stage />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/session" element={<QuestSession />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/server-error" element={<ServerError />} />
      </Routes>
    </Router>
  );
}

export default App;
