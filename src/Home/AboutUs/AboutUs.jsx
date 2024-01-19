import './styles.scss'
import { motion } from 'framer-motion'
import icon2 from "../../images/icon2.png"


export default function AboutUs({rotate}){
    return(
        <motion.section className="about-section"
            initial={{opacity:0,x:100%-200}}
            whileInView={{opacity:1,x:0}}
            id='About'
        >
            <div className="container">
                <motion.img src={icon2} alt="icon2" style={{rotate}}/>
                <div className="about-text">
                    <h1>About us</h1>
                    <div className='content-1'>
                    The quick brown fox jumped over the lazy dog. 
                    Meanwhile, a gentle breeze rustled the leaves on the trees, 
                    creating a soothing melody. Birds chirped in the distance, 
                    adding to the natural symphony of the surroundings. 
                    As the sun began to set, casting warm hues across the horizon, 
                    the world seemed to embrace a sense of tranquility.
                    </div>
                    <div className='content-2'>
                    As the sun began to set, casting warm hues across the horizon,
                    the world seemed to embrace a sense of tranquility. 
                    In this serene moment, one could appreciate the beauty of nature and the simplicity of life.
                    </div>
                </div>
            </div>
        </motion.section>
    )
}