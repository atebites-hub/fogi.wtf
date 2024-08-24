import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={App} />
        </Routes>
      </Router>

      <Navbar />
      <Header />
      <Main />
      <Footer />


    </>
  );
}

export default App;
