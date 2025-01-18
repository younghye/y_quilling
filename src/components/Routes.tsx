import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Video from "../pages/Video";
import Contact from "../pages/Contact";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route>
          <Route path="/home" index element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Switch>
    </>
  );
}
