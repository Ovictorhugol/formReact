import Home from "./pages/Home";
import { AppHome } from "./utils/styles";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
