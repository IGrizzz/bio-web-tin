
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Prestasi from "./Prestasi";
import Success from "./success";

export default function App () {
 return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header/>} />
            <Route path="/prestasi" element={<Prestasi/>} />
            <Route path="/success-story" element={<Success/>} />
        </Routes>
    </BrowserRouter>
 )
}
