import { EthProvider } from "./contexts/EthContext";
import SimpleGreeter from "./components/SimpleGreeter";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <EthProvider>

      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav container">
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>
                Home
              </NavLink>

              <NavLink
                to="/simple-greeter"
                className={({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link '}>
                Simple Greeter
              </NavLink>

              {/* todo: add new route buy-coffee */}

            </div>
          </div>
        </nav>
        <div className="container pt-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/simple-greeter" element={<SimpleGreeter />} />
            {/* todo: add a new route */}
          </Routes>
        </div>
      </Router>
    </EthProvider>
  );
}

function Home() {
  return (
    <>
      <p class="lead">
        Here start my adventure...
      </p>
      <img src="./logo192.png" className="img-fluid" alt="" />
    </>
  )

}

export default App;
