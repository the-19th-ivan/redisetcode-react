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
import { useCookies } from "react-cookie";
import ProtectedRoute from "./utils/ProtectedRoute";
import Home from "./pages/Home/Home";
import QuestResult from "./pages/Quest/QuestResult";
import EmailConfirm from "./pages/Auth/EmailConfirm";
import EditProfile from "./pages/Profile/EditProfile";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";

function App() {
  /*
    Get JWT to check if user is Auth
  */
  const [cookies] = useCookies(["jwt"]);
  function isAuthenticated() {
    const token = cookies.jwt;
    return !!token;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/server-error" element={<ServerError />} />
        <Route path="/verify" element={<EmailConfirm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:tokenId" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route
          path="/map"
          element={
            <ProtectedRoute isLoggedIn={isAuthenticated()} navigateTo="/login">
              <Map />
            </ProtectedRoute>
          }
        />
        <Route
          path="/codelab"
          element={
            <ProtectedRoute isLoggedIn={isAuthenticated()} navigateTo="/login">
              <Codelab />
            </ProtectedRoute>
          }
        />
        <Route
          path="/map/:regionId/zones"
          element={
            <ProtectedRoute isLoggedIn={isAuthenticated()} navigateTo="/login">
              <Zone />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stage/:zoneId/stages"
          element={
            <ProtectedRoute isLoggedIn={isAuthenticated()} navigateTo="/login">
              <Stage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lesson/:stageId"
          element={
            <ProtectedRoute isLoggedIn={isAuthenticated()} navigateTo="/login">
              <Lesson />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute isLoggedIn={isAuthenticated()} navigateTo="/login">
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quest"
          element={
            <ProtectedRoute isLoggedIn={isAuthenticated()} navigateTo="/login">
              <Quest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quest/:questId"
          element={
            <ProtectedRoute isLoggedIn={isAuthenticated()} navigateTo="/login">
              <QuestSession />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quest/:questId/result"
          element={
            <ProtectedRoute isLoggedIn={isAuthenticated()} navigateTo="/login">
              <QuestResult />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <ProtectedRoute isLoggedIn={isAuthenticated()} navigateTo="/login">
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:userId/edit"
          element={
            <ProtectedRoute isLoggedIn={isAuthenticated()} navigateTo="/login">
              <EditProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
