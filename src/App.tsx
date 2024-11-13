import "./App.css";
import Header from "./components/Header";
import Routes from "./components/Routes";

export default function App() {
  return (
    <div className="App max-w-6xl mx-auto px-7 py-4">
      <Header />
      <Routes />
    </div>
  );
}
