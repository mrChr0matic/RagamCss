import './styles.scss';
import { motion } from 'framer-motion';
import icon1 from '../../images/icon1.png';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function TopSection({ rotate }) {
  const scrollToAbout = () => {
    scroll.scrollTo('About', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <motion.div
      className="top-section"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <div className="container">
        <div className="container-text">
          <h1>Ragam ‘24 Tech-Team Inductions</h1>
          <p>
            Embrace the challenges that lie ahead, as you become part of a
            community dedicated to pushing boundaries and shaping the fest.
          </p>
          <button className="explore-button" onClick={scrollToAbout}>
            <span>Explore</span>
            <span className="material-symbols-outlined">arrow_outward</span>
          </button>
        </div>
        <motion.img src={icon1} alt="icon1" style={{ rotate }} />
      </div>
      <div className="learn-more">
        <ScrollLink to="About" smooth>
          Learn more
        </ScrollLink>
        <button className="learn-more-arrow" onClick={scrollToAbout}>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
    </motion.div>
  );
}
