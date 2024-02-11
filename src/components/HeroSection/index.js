import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton, PreTitle } from './HeroStyle'
// import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { useTheme } from '@mui/material';

const HeroSection = () => {
    const theme = useTheme();
    return (
        <div id="about">
            <HeroContainer>
                {/* <HeroBg>
                    <HeroBgAnimation />
                </HeroBg> */}
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title><small style={{ fontSize: '24px', fontWeight: 400 }}>Hi, I am </small><br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span style={{ color: theme.palette.mode === 'dark' ? theme.palette.secondary[400] : '#8400ff' }}>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        {/* <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton> */}
                    </HeroLeftContainer>

                    {/* <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer> */}
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection