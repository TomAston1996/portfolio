import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
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
            <LinkTitle>Chat</LinkTitle>
            <LinkItem href="https://t.me/lordarcadius">Telegram</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:tom.aston09@gmail.com">
              tom.aston09@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Copyright &copy; {year} <Link href="https://www.vipuljha.com">  Tom Aston</Link>. All rights reserved.</Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/lordarcadius">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/lordarcadius/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/lordarcadius">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.twitter.com/lordarcadius">
              <AiFillTwitterCircle size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>

      </FooterWrapper>
    </Section>
  );
};

export default Footer;
