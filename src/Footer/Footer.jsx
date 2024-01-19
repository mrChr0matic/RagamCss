import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../Navbar/Logo';
import './styles.scss';

const socialMediaIcons = [
  {
    icon: 'fa-instagram',
    link: 'https://www.instagram.com/ragam_nitc/?hl=en',
  },
  {
    icon: 'fa-twitter',
    link: 'https://www.instagram.com/ragam_nitc/?hl=en',
  },
  {
    icon: 'fa-youtube',
    link: 'https://www.instagram.com/ragam_nitc/?hl=en',
  },
  {
    icon: 'fa-whatsapp',
    link: 'https://www.instagram.com/ragam_nitc/?hl=en',
  },
];

const refs = socialMediaIcons.map(() => React.createRef());

export default function Footer() {
  const [positions, setPositions] = useState(socialMediaIcons.map(() => ({ x: 0, y: 0 })));

  const mouseMove = (index, e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = refs[index].current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPositions(prevPositions => prevPositions.map((pos, i) => (i === index ? { x, y } : pos)));
  };

  const mouseLeave = () => {
    setPositions(socialMediaIcons.map(() => ({ x: 0, y: 0 })));
  };

  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src='../images/nitcLogo.png' alt='nitcLogo' />
        <Logo />
      </div>
      <div className='footer-tray'>
        {socialMediaIcons.map((icon, index) => (
          <div className='social-div' key={index}>
            <motion.a
              href={icon.link}
              onMouseMove={(e) => mouseMove(index, e)}
              onMouseLeave={mouseLeave}
              ref={refs[index]}
              animate={positions[index]}
            >
              <motion.i
                className={`fa-brands ${icon.icon}`}
              ></motion.i>
            </motion.a>
          </div>
        ))}
      </div>
      <div className='footer-address'>
        <h3>National Institute of Technology, Calicut</h3>
        <p>Calicut Mukkam Road, Kattangal </p>
        <p>Kerala 673601</p>
      </div>
    </div>
  );
}
