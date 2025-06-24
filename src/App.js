import { BrowserRouter  as Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';


function App() {
  return (
      <><Header /><Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes></>
  );
}

export default App;