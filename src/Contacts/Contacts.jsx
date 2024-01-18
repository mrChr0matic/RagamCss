import './styles.scss'
import { motion } from 'framer-motion'


export default function Contacts(){ 
    const items=[
        {
            icon: <i class="fa-solid fa-phone"></i>,
            text: "BY PHONE",
            desc: "+91 9994058168"
        },
        {
            icon: <i class="fa-solid fa-location-dot"></i>,
            text: "FIND US",
            desc: "National Institute of Technology Calicut, Kerala 673601"
        },
        {
            icon: <i class="fa-regular fa-envelope"></i>,
            text: "BY EMAIL",
            desc: "contactus@nitc.ac.in"
        },
    ]
    return (
        <motion.div className="contacts"
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
        >
            <div className='container'>
                <h2>Contact us</h2>
                <div className='container-items'>
                    {items.map((item)=>(
                        <div className='item'>
                            <div className='icon'>{item.icon}</div>
                            <h3 className='text'>{item.text}</h3>
                            <p className='desc'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}