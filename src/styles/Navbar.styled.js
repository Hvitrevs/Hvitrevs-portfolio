import styled from 'styled-components'

export const NavbarContainer = styled.div`
  position: fixed;
  width:100%;
  top: 0;
  left: 1.3rem;
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

export const NavMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 70%;
  background-image:linear-gradient(to right,  hsla(206, 100.00%, 8.60%, 0.69), hsla(212, 67.40%, 16.90%, 0.97));
  z-index: 1;
`