/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, ButtonContainer, MobileIcon, MobileMenu, MobileLink, DarkModeSwitchButton } from './NavbarStyledComponent'
import { DiEnvato } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";
import { Bio } from '../../data/constants';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { ResumeButton } from './NavbarStyledComponent';
import { setMode } from "../../state";
// import { useTheme } from 'styled-components';
import { useTheme, styled, Switch } from '@mui/material';
import { useDispatch } from 'react-redux';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


const Navbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav style={{ backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.alt : '#ffffff', boxShadow: `0px 4px 2px ${theme.palette.mode === 'dark' ? theme.palette.background.alt : theme.palette.grey[200]}` }}>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: theme.palette.mode === 'dark' ? theme.palette.secondary[400] : theme.palette.primary[300], cursor: 'pointer' }}>
            <DiEnvato size="2.5rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <DarkModeSwitchButton>
          <MaterialUISwitch onClick={() => dispatch(setMode())} sx={{ m: 1 }} defaultChecked />
        </DarkModeSwitchButton>
        <MobileIcon>
          {!isOpen ? <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} /> : <AiOutlineClose onClick={() => {
            setIsOpen(!isOpen)
          }} />}

        </MobileIcon>
        <NavItems>
          <NavLink href="#about" style={{ color: theme.palette.mode === 'dark' ? theme.palette.secondary[50] : theme.palette.primary[300] }}>About</NavLink>
          <NavLink href='#skills' style={{ color: theme.palette.mode === 'dark' ? theme.palette.secondary[50] : theme.palette.primary[300] }}>Skills</NavLink>
          <NavLink href='#experience' style={{ color: theme.palette.mode === 'dark' ? theme.palette.secondary[50] : theme.palette.primary[300] }}>Experience</NavLink>
          <NavLink href='#projects' style={{ color: theme.palette.mode === 'dark' ? theme.palette.secondary[50] : theme.palette.primary[300] }}>Projects</NavLink>
          <NavLink href='#contact' style={{ color: theme.palette.mode === 'dark' ? theme.palette.secondary[50] : theme.palette.primary[300] }}>Contact</NavLink>
          <MaterialUISwitch onClick={() => dispatch(setMode())} sx={{ m: 1 }} defaultChecked />
        </NavItems>
        <ButtonContainer>
          <ResumeButton href={Bio.resume} target='display'>Resume</ResumeButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen} style={{ backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.alt : '#ffffff', boxShadow: `0px 4px 2px ${theme.palette.mode === 'dark' ? theme.palette.background.alt : theme.palette.grey[200]}` }}>
            <MobileLink href="#about" style={{ color: theme.palette.mode === 'dark' ? theme.palette.secondary[50] : theme.palette.primary[300] }} onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' style={{ color: theme.palette.mode === 'dark' ? theme.palette.secondary[50] : theme.palette.primary[300] }} onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' style={{ color: theme.palette.mode === 'dark' ? theme.palette.secondary[50] : theme.palette.primary[300] }} onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' style={{ color: theme.palette.mode === 'dark' ? theme.palette.secondary[50] : theme.palette.primary[300] }} onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#contact' style={{ color: theme.palette.mode === 'dark' ? theme.palette.secondary[50] : theme.palette.primary[300] }} onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            <ResumeButton style={{ padding: '8px 14px', width: 'max-content' }} href={Bio.resume} target='display'>Resume</ResumeButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar