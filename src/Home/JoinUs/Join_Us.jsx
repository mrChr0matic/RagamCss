import './styles.scss'
import { motion } from 'framer-motion';

export default function JoinUs(){
    return(
        <motion.div className="join-section"
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
        >
            <div className="container">
                <div className="join-text">
                    <h1>Join Us</h1>
                    <div className='join-content'>
                        <p>
                        Embark on a journey with us and become part of a vibrant tech team, 
                        where innovation meets collaboration. Join us and contribute to something extraordinary!
                        </p>
                        <div className='text-items'>
                            <ul>
                                <li>Invaluable experience</li>
                                <li>Work with the latest technologies and frameworks</li>
                                <li>Collaborate with others</li>
                                <li>Be part of the biggest cultural fest of South India</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='mail-div'>
                    <div className="mail-box">
                        <div className='mail-icon'><i class="fa-regular fa-envelope"></i></div>
                        <h3>EMAIL</h3>
                        <p>contactus@nitc.ac.in</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}