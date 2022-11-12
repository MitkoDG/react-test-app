import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Offers from "../pages/Offers";

import classes from './Body.module.css';

const Body = () => {

    return (
        <main className={classes.body}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/offers' element={<Offers />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default Body;