import styled from 'styled-components'
import tw from 'twin.macro'

interface CardProps {
  loading?: string
}

export const Card = styled.div<CardProps>`
  ${tw`flex
  flex-col
  w-full
  h-full
  p-6 
  rounded-xl 
  bg-white`}
  ${({ loading }) => loading && tw`animate-pulse bg-gray-300 w-full h-60 mr-6`}
  
  -webkit-box-shadow: 0px 0px 15px 3px rgba(209,213,219,0.6); 
  box-shadow: 0px 0px 15px 3px rgba(209,213,219,0.7);
`

export const Header = styled.div`
  ${tw`flex mb-3`}
  img {
    ${tw`w-14 h-14 rounded-lg`}
  }
  span {
    ${tw`ml-3 text-sm`}

    /* User name */
    p:first-child {
      ${tw`font-medium text-gray-700`}
    }

    /* posted_at */
    p:last-child {
      ${tw`font-medium text-xs text-blue-500`}
    }
  }
`

export const Body = styled.div`
  ${tw`flex-1 text-base text-gray-700 font-semibold overflow-y-hidden`}
`

export const Labels = styled.div`
  & > :not(:last-child) {
    ${tw`mr-2`}
  }

  ${tw`flex flex-wrap my-4`}
`

export const Footer = styled.div`
  ${tw`flex w-full`}
  a {
    margin: 0;
    ${tw`w-full h-11 rounded-md text-sm transition-opacity`}
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      ${tw`opacity-90`}
    }

    &:first-child {
      --tw-shadow: 0 2px 20px -5px rgba(59, 130, 246, 0.1),
        0 10px 10px -5px rgba(59, 130, 246, 0.3);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      ${tw`text-white text-sm bg-blue-500 mr-2`}
    }
  }
`
