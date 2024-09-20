import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: auto;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  background: none;
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  margin-bottom: 1.5rem;
  padding: 0.8rem;
  font-size: 1rem;
  font-family: 'Ubuntu Mono', monospace;
  outline: none;
`;

const TextArea = styled.textarea`
  background: none;
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  margin-bottom: 1.5rem;
  padding: 0.8rem;
  font-size: 1rem;
  font-family: 'Ubuntu Mono', monospace;
  outline: none;
  resize: none;
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  border: none;
  padding: 0.8rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Ubuntu Mono', monospace;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send form data to an API)
    console.log('Form Submitted:', formData);
    // Reset the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Main>
          <h2>Contact Me</h2>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </Main>

        <BigTitle text="CONTACT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default ContactPage;
