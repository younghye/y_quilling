import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Video from "./Video";
import Contact from "./Contact";
import About from "./About";
import NotFound from "./NotFound";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}
