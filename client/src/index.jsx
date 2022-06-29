// 
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ToysList from './components/ToysList/ToysList';
import CategoriesList from './components/Categories/CategoriesList';
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
<BrowserRouter>
<NavBar/>
<Search/>
  <Routes>
    <Route path= "/" element={<App/>}/>
      <Route path= "/toys" element={<ToysList/>}/>
      <Route path= "/Categories" element={<CategoriesList/>}/>
  </Routes>
</BrowserRouter>,
);