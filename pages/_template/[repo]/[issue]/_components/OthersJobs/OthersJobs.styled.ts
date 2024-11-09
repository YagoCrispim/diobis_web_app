import styled from 'styled-components'
import tw from 'twin.macro'
import { visualConf } from '../../../../../../configs/visuals/visuals'

export const Container = styled.div`
  ${tw`w-full h-full flex justify-center items-center text-sm`}
  padding: 10px 0px 0px 10px;

  @media(max-width: ${visualConf.tabletMaxWidth}) {
    ${tw`relative`}
  }
`

export const Slider = styled.ul`
  ${tw`w-full h-full top-0 left-0`}

  & > :not(:last-child) {
    ${tw`mb-4`}
  }
`

export const Card = styled.li`
  ${tw`bg-white rounded-lg p-4`}

  -webkit-box-shadow: 0px 0px 15px 3px rgba(209,213,219,0.40);
  box-shadow: 0px 0px 15px 3px rgba(209, 213, 219, 0.40);

  .labels {
    ${tw`flex flex-wrap mt-3`}

    & > :not(:last-child) {
      ${tw`mr-2`}
    }
  }
`

export const Button = styled.div`
  ${tw`w-full text-right m-4`}

  &:hover {
    ${tw``}
  }

  a {
    transition: 0.2s;
    ${tw`bg-gray-100 w-full mt-4 mr-4 text-gray-700 p-2 rounded-lg`}

    &:hover {
      ${tw`bg-blue-600 text-white`}
    }
  }
`
