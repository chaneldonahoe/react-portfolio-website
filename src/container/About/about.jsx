// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './about.scss';

const abouts = [
  { title: 'Backend Development', desc: 'I enjoy the logic behind the scenes', imgUrl: images.about01 },
  { title: 'Frontend Development', desc: 'I enjoy seeing designs front and center', imgUrl: images.about02 },
  { title: 'MERN Stack', desc: 'MongoDB, Express.js, React, Node', imgUrl: images.about04 },
  { title: 'Web3', desc: 'I enjoy building the new tomorrow', imgUrl: images.about03 },
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Design</span><br /> means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.desc}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About