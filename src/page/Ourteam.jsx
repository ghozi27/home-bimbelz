import React from 'react'
import { useRef, useEffect, useState } from "react";
import { motion } from 'framer-motion'
import images from './images'
import underline3 from "../asset/logos/Underline3.svg";
import "../css/team.css"

export const Ourteam = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div className='Ourteam'>
            <div className='pt-20'>
                <h1 className="text-center text-4xl font-semibold">Our Team</h1>
                <div className="flex justify-center">
                <img src={underline3} alt="" className="p-5" />
              </div>
            </div>
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                    {images.map(image => {
                        return (
                            <motion.div className='item' key={image}>
                                <img src={image} alt="" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Ourteam;
