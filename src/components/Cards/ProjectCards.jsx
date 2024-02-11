import React from 'react'
import styled from 'styled-components'
import { useTheme } from 'styled-components';

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: #000000;
    padding: 10px 14px;
    border-radius: 8px;
    background-color: #ffda85;
    ${({ dull, theme }) => dull && `
        background-color: #21295c;
        color: #f0f0f0;
        &:hover {
            background-color: #a6a9be;
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: #997d3d;
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;
const Card = styled.div`
    width: 330px;
    height: 100%;
    background-color: ${({ theme }) => theme.card};
    cursor: default;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        // transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 12px;
    border: 0.1px solid #854CE6;
    // box-shadow: rgba(23,92,230,0.2) 0px 2px 4px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 8px 0px;
    gap: 12px;
`;

const ProjectCards = ({ project, setOpenModal }) => {
    const theme = useTheme();
    return (
        // <Card onClick={() => setOpenModal({ state: true, project: project })}>
        <Card>
            <Image src={project.image} />
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member) => (
                    <Avatar src={member.img} />
                ))}
            </Members>
            <ButtonGroup>
                <Button dull href={project?.github} target='new'>View Code</Button>
                <Button href={project?.webapp} target='new'>View Live App</Button>
            </ButtonGroup>
        </Card>
    )
}

export default ProjectCards