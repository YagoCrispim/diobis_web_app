import styled from 'styled-components'
import tw from 'twin.macro'
import { visualConf } from '../../configs/visuals/visuals'

export const Container = styled.header`
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  ${tw`w-full fixed z-50 left-0 h-16 top-0 bg-white text-gray-700`}
`

export const Content = styled.div`
  ${tw`flex items-center w-full h-full mx-auto`}
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: ${visualConf.pcMaxWidth};
`

export const LogoContainer = styled.div`
  ${tw`w-20 mr-9 cursor-pointer`};
`

export const Navbar = styled.nav`
  ${tw`w-full h-full`}

  @media (max-width: ${visualConf.smallMaxWidth}) {
    ${tw`hidden`}
  }
`

export const NavbarMobile = styled.nav`
  display: none;

  @media (max-width: ${visualConf.smallMaxWidth}) {
    ${tw`flex w-full h-full`}
    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: relative;

    &:hover {
      cursor: pointer;
    }
  }
`

export const Navigator = styled.ul`
  ${tw`flex flex-1 list-none h-full`}

  @media (max-width: ${visualConf.smallMaxWidth}) {
    display: none;
  }
`

export const NavigatorMobile = styled.ul`
  display: none;

  @media (max-width: ${visualConf.smallMaxWidth}) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    background-color: #ffffff;

    position: absolute;
    top: 3rem;
    right: 0px;

    width: fit-content;
    height: max-content;
    margin: 0.5rem 0;

    border-radius: 1rem;
    overflow: hidden;

    -webkit-box-shadow: 0px 0px 15px 3px rgba(209, 213, 219, 0.6);
    box-shadow: 0px 0px 15px 3px rgba(209, 213, 219, 0.7);
  }
`
