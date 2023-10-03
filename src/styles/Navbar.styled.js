import styled from 'styled-components'

export const NavbarContainer = styled.div`
  position: fixed;
  width:100%;
  top: 0;
  left: 2%;
  z-index: 10;
  transition: all 0.3s ease-in;
  background-color: ${({ bgColor }) => bgColor};
  

`

export const Logo = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.white};
`

export const MenuIcon = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ size}) => size};
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;

`

export const MenuItem = styled.a`
  color: ${({ color }) => color};
  font-size: 2rem;
  margin-top: 3rem;
  cursor: pointer;
  text-decoration: none;
`


export const NavMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-image:linear-gradient(to bottom,  hsla(222, 100.00%, 10.40%), hsla(236, 100.00%, 5.30%, 0.69));
  z-index: 1;
  
`
