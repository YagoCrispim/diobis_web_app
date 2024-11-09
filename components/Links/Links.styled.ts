import styled from 'styled-components'
import tw from 'twin.macro'
import { visualConf } from '../../configs/visuals/visuals'

export const Link = styled.li`
  ${tw`flex items-center h-full text-sm font-semibold transition-colors px-4`}

  &:hover {
    ${tw`text-blue-500`}
  }

  @media (max-width: ${visualConf.smallMaxWidth}) {
    font-size: 1rem;
    padding: 0;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    &:hover {
      color: currentColor;
    }

    & a {
      width: 100%;
      height: 100%;
      
      padding: 1rem 1rem;
      text-align: center;

      transition: 0.2s ease-in-out;

      &:hover {
        ${tw`bg-blue-500 text-white`}
      }
    }
  }
`
