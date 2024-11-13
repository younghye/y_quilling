import "./App.css";
import Header from "./components/Header";
import Routes from "./components/Routes";

export default function App() {
  return (
    <div className="App max-w-6xl mx-auto px-7 mt-3">
      <Header />
      <Routes />
    </div>
  );
}
