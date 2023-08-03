import { styled } from "styled-components"

export const ExternalLink = ({link, children} : {link: string, children: React.ReactNode}) => {
    return (
        <StyledLink target="_blank" href={link}>
            {children}
        </StyledLink>
    );
}

const StyledLink = styled.a`
    text-decoration: underline;
    cursor: pointer;
`