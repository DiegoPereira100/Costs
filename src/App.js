import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="minHeight">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/company" exact element={<Company />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/newproject" exact element={<NewProject />} />
          <Route path="/projects" exact element={<Projects />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;