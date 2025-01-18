import "./App.css";
import Header from "./components/Header";
import Routes from "./components/Routes";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App max-w-6xl mx-auto px-7 py-4">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}
