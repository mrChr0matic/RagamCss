import './App.css';
import Navbar from './Navbar/Navbar';
import TopSection from './Home/TopSection/TopSection';
import AboutUs from './Home/AboutUs/AboutUs';
import JoinUs from './Home/JoinUs/Join_Us';
import Footer from './Footer/Footer';
import Contacts from './Contacts/Contacts';
import { HashRouter as Router,Route, Routes } from 'react-router-dom';

import { useScroll, useTransform } from 'framer-motion';

function App() {
  const { scrollYProgress} = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <Router basename={'/RagamCss'}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/'
           element={
            <>
              <TopSection rotate={rotate} />
              <AboutUs rotate={rotate}/>
              <JoinUs/>
            </>
            }
          />
          <Route path='/contact' element={<Contacts/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
