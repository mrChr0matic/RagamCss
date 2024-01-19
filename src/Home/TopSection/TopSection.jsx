import './styles.scss'
import { motion } from 'framer-motion'

export default function TopSection({ rotate }){
    return(
        <motion.div className="top-section"
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
        >
            <div className="container">
                <div className="container-text">
                    <h1>Ragam ‘24 Tech-Team Inductions</h1>
                    <p>Embrace the challenges that lie ahead, as you become part of a community dedicated to pushing boundaries and shaping the fest. </p>
                    <button className='explore-button'>
                        <span>Explore</span>
                        <span class="material-symbols-outlined">arrow_outward</span>
                    </button>
                </div>
                <motion.img 
                src="../../images/icon1.png" 
                alt="icon1"                                 
                style={{rotate}}
                />
            </div>
            <div className="learn-more">
                <a href='#About'>Learn more</a>
                <button className='learn-more-arrow'><i class="fa-solid fa-chevron-down"></i></button>
            </div>
        </motion.div>
    )
}