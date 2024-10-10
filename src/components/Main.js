import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
;


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`
const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  margin: 0;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Reduce font size for mobile */
    text-align: center; /* Center text on mobile */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Further reduce font size for smaller devices */
  }
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  color: #333;
  line-height: 1.5;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for mobile */
    text-align: center; /* Center text on mobile */
    line-height: 1.3; /* Adjust line height for readability on smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Smaller font size for smaller screens */
    margin: 0.25rem 0; /* Adjust margins for smaller devices */
  }
`;

const Container = styled.div`
padding: 2rem;
`

const CONTACT = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`

const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 2.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`
const Left = styled.div`
  position: absolute;
  top: 50%;
  left: 30%; /* Adjust as needed for positioning */
  transform: translate(-50%, -50%);
  width: 30%; /* Adjust width as needed */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Align items to the left */
  transition: all 1s ease;
  
`;

const Right = styled.div`
  position: absolute;
  top: 35%;
  right: 26%; /* Adjust as needed for positioning */
  transform: translate(50%, -50%);
  width: 30%; /* Adjust width as needed */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end; /* Align items to the right */
  transition: all 1s ease;
`;

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
         <DarkDiv   click={click}/>
            <Container>
            <PowerButton />
            <LogoComponent theme={click ? 'dark' :'light'}/>
            <SocialIcons theme={click ? 'dark' :'light'} />
           
            <Center click={click}>
                <YinYang  onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                <span>click here</span>
            </Center>

            
            <CONTACT to="/contact" click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Contact Me
                </motion.h2>
            </CONTACT>

            
            <BLOG to="/blog">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Projects
                </motion.h2>
            </BLOG>
            <WORK to="/work" click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Achievements
                </motion.h2>
            </WORK>
            <BottomBar>
            <ABOUT to="/about" click={+click}>
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    About.
                </motion.h2>
            </ABOUT>
            <SKILLS to="/skills">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    My Skills.
                </motion.h2>
            </SKILLS>

            </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null }

            <Right>
             <h1>
             <p>ᴡᴇʟᴄᴏᴍᴇ ᴛo</p>ᴍʏ ᴘᴏʀᴛꜰᴏʟɪᴏ
             </h1>
            </Right>

            <Left>
            <Heading>Turning Vision Into Reality With Code And Design.</Heading>
        <Paragraph>
          As a passionate and aspiring web developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
        </Paragraph>

            </Left>
        </MainContainer>
    )
}

export default Main
