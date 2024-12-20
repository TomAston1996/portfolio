import React from 'react';
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai';
import { Link, Section } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Section id="contact">
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:mail@tomaston.dev">
              mail@tomaston.dev
            </LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>LinkedIn</LinkTitle>
            <LinkItem href="https://www.linkedin.com/in/tomaston96/" target="_blank">
              tomaston96
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Copyright &copy; {year} <Link href="#">  Tom Aston</Link>. All rights reserved.</Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/TomAston1996">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/tomaston96/" target="_blank">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="mailto:mail@tomaston.dev">
              <AiOutlineMail size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
