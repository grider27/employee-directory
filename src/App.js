// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Container from "./components/Container";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Search />
      <Container />
    </div>
  );
}

export default App;
