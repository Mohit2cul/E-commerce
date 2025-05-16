import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Context from "./utils/Context";
import Create from "./Components/Create";

const App = () => {
  const { search, pathname } = useLocation();
  return (
    <div className="flex h-screen w-screen">
      {(pathname != "/" ||
        search.length > 0) && (
          <Link
            to="/"
            className="text-red-300 absolute top-[3%] left-[23%] text-xl font-bold bg-white rounded-lg shadow-lg"
          >
            Home
          </Link>
        )}
      <Context>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Context>
    </div>
  );
};

export default App;
