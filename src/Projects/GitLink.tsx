import styled from "styled-components";
import { LanguageElement } from "../LanguageElement";
import {AiFillGithub} from 'react-icons/ai'
// import { useLanguage } from "../Providers/LangProvider";

export const GitLink = ({link} : {link: string}) => {
    const PersianElement = () => <LinkWrapper target="_blank" href={link}>
        <IconWrapper><AiFillGithub /></IconWrapper>
        <span>مشاهده کد در Github</span>
    </LinkWrapper>

    const EnglishElement = () => <LinkWrapper target="_blank" href={link}>
        <IconWrapper><AiFillGithub /></IconWrapper>
        <span>View Code on Github</span>
    </LinkWrapper>

    return <LanguageElement PersianElement={PersianElement} EnglishElement={EnglishElement}/>
}

const LinkWrapper = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: underline;
    cursor: pointer;
`;

const IconWrapper = styled.span`
    font-size: 1.4rem;
`;

