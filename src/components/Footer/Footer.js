import React, {useState} from 'react';
import {RiInstagramLine} from 'react-icons/ri';
import {FiFacebook} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';
import {FooterContainer, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinksItems,
        FooterLinkTitle, 
        SocialMedia, 
        SocialMediaWrap, 
        WebsiteRights, 
        SocialIcons, 
        SocialIconLink,
        BottomGradient,
        ForEarth,
        Waves,
        FoundationText,
        FoundationEarth,
    } from './Footer.elements';
import Wave from '../../assets/wave9-01.svg';
import FEarth from '../../assets/fearth-01-01.svg';
import FText from '../../assets/ftext-01-01.svg';

import { Earth } from '../../components';

const Footer = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [isBottom, setIsBottom] = useState(false);
      
      const revealEarth = () => {
          if (window.scrollY >= 4500) {
              setIsBottom(true);
          } else if (window.scrollY >= 250) {
              setIsScroll(true);
              setIsBottom(false);
          } else {
            setIsScroll(false);
            setIsBottom(false);
        }
      };
      
      window.addEventListener('scroll', revealEarth);
    return (
        <>
        <BottomGradient isScroll={isScroll}>
            <ForEarth isBottom={isBottom}>
                <Earth />
            </ForEarth>
            <Waves src={Wave}/>
        </BottomGradient>
        <FooterContainer>
            <FoundationText  hide={true} src={FText} />
            <FoundationEarth  hide={true} src={FEarth} />
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Community</FooterLinkTitle>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>FAQs</FooterLinkTitle>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Legal</FooterLinkTitle>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>©2021 Earth I.O.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <RiInstagramLine />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FiFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                            <HiOutlineMail />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
        </>
    )
}

export default Footer
