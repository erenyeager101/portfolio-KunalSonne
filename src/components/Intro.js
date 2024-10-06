import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/profile-img.png'

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      135deg,
      ${(props) => props.theme.body} 40%,
      ${(props) => props.theme.text} 100%
    );  /* Inverted the shading */
  border-radius: 20px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 1;
`

const SubBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Text = styled.div`
  font-size: calc(1em + 1vw);
  color: ${(props) => props.theme.text};
  text-align: center;
  padding: 1.5rem;
  line-height: 1.4;
  h1 {
    font-size: calc(1.5em + 2vw);
    font-weight: bold;
    letter-spacing: 0.1rem;
  }
  h3 {
    font-size: calc(1em + 1.2vw);
    color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
    
    margin-top: 0.5rem;
  }
  h6 {
    font-size: calc(0.8rem + 1vw);
    color: ${(props) => `rgba(${props.theme.textRgba}, 0.3)`};
    margin-top: 1rem;
  }
`

const Circle = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.body};
  img {
    width: 100%;
    height: auto;
  }
`

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '70vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hello There!</h1>
          <h3>Hi, I'm Kunal Sonne 👋</h3>
          <h6>I’m a passionate tech enthusiast and B.Tech student at VIT Pune, specializing in Computer Science. With a keen interest in Machine Learning, Artificial Intelligence, and Web Development, I strive to create innovative solutions that bridge the gap between technology and real-world applications.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <Circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <img src={Me} alt="Profile Pic" />
        </Circle>
      </SubBox>
    </Box>
  )
}

export default Intro
