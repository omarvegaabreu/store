import HomeRoute from "./routes/home/Home.Route.Component";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />}></Route>
    </Routes>
  );
};

export default App;
