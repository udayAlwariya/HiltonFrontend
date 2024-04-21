import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Restraunts } from "./Pages/Restraunts";
import { RestrauntDetails } from "./Pages/RestrauntDetails";
import { RecoilRoot } from "recoil";
import { Favorites } from "./Pages/Favourite";
import { Contact } from "./Pages/Contact";
import { Register } from "./Pages/Register";
import { Signin } from "./Pages/Signin";
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/restraunts" element={<Restraunts />} />
          <Route path="/restraunt/:id" element={<RestrauntDetails />} />
          <Route path="/favourites" element={<Favorites/>} />
          <Route path = "/contact" element={<Contact/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
