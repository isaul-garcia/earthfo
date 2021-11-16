import React, {useState, useEffect} from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavFoundation, NavLink,NavLogoImg } from './Navbar.elements';
import NavbarLogoFile from '../../assets/HEREONEARTH-01.svg';
import RainbowFoundation from '../../assets/rainbow-foundation.svg';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    
    const [isScroll, setIsScroll] = useState(false);
      
      const revealEarth = () => {
          if (window.scrollY >= 250) {
              setIsScroll(true);
          } else {
            setIsScroll(false);
        }
      };
      
      window.addEventListener('scroll', revealEarth);

    return (
        <>
        <IconContext.Provider value={{ size: 35 }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/earthfo">
                        <NavLogoImg  src={NavbarLogoFile} alt="logo" />
                        <NavFoundation isScroll={isScroll} src={RainbowFoundation} hide={true}/>
                    </NavLogo> 
                    <MobileIcon onClick={handleClick}>
                        {click ? <RiCloseLine /> : <RiMenuFill />}
                    </MobileIcon>

                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLink to="/earthfo">Events</NavLink>
                        </NavItem>
                    
                        <NavItem>
                            <NavLink to="/earthfo">About</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
