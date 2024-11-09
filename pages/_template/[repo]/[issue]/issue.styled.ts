import styled from 'styled-components'
import tw from 'twin.macro'
import { Container as ContainerComponent } from '../../../../components'
import { visualConf } from '../../../../configs/visuals/visuals'

export const Container = styled(ContainerComponent)`
  ${tw`flex w-full flex-row justify-center`}
`

export const Content = styled.div`
  ${tw`flex flex-row w-full`}
  max-width: ${visualConf.pcMaxWidth};
  position: relative;

  @media (max-width: ${visualConf.tabletMaxWidth}) {
    ${tw`flex w-full justify-center items-center flex-col`}
    width: 100%;

    & > div {
      width: 100%;
    }

    // Card avatar
    & > div:nth-child(1) {
      order: 2;
    }

    // Outras vagas
    & > div:nth-child(2) {
      order: -1;
    }
  }
`

export const Actions = styled.div`
  ${tw`flex justify-between items-center mt-8 relative`}

  & > svg {
    ${tw`cursor-pointer transition-colors delay-75 ease-in-out w-7`}

    &:hover {
      ${tw`text-blue-500 transition-colors`}
    }
    &:not(:last-child) {
      ${tw`mr-2`}
    }
  }
`

export const LabelsContainer = styled.div`
  ${tw`flex flex-wrap m-4 text-gray-700`}

  & > :not(:last-child) {
    ${tw`mr-2`}
  }
`

export const InformationsBar = styled.div`
  ${tw`m-4 p-4 rounded-lg text-gray-700 relative block`}

  top: 80px;
  ${tw`sticky`}

  & > div:nth-child(2) {
    top: 300px;
    height: ${({ hidden }) => (hidden ? '0vh' : '55vh')};
    top: 330px;
  }

  & > div > div:first-child {
    ${tw`flex items-center text-gray-700`}
  }

  & > div:first-child img {
    ${tw`w-12 rounded-full mr-4`}
  }

  & h1 {
    ${tw`font-medium text-sm`}
  }

  @media (max-width: ${visualConf.tabletMaxWidth}) {
    ${tw`w-full justify-center items-center`}

    & > div {
      ${tw`static block`}
    }

    & > div:nth-child(2) {
      display: block;
      position: static;
    }
  }
`

export const MoreJobs = styled.div`
  ${tw`flex flex-col items-center pr-4 mt-4 justify-center`}
  overflow: auto;
  overflow-x: hidden;

  & > h3 {
    ${tw`flex-1 pl-4 text-gray-700 w-full`}
  }

  @media (max-width: ${visualConf.tabletMaxWidth}) {
    padding-right: 1.7rem;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.4);
  }
`

export const Markdown = styled.div`
  ${tw`w-3/4 flex justify-center text-gray-700`}

  // job description
  & div {
    ${tw`bg-white rounded-xl col-start-5 col-span-full m-4 flex-1`}
    padding: 10px;

    @media (max-width: ${visualConf.tabletMaxWidth}) {
      ${tw`m-0 p-2`}
      width: 100%;
    }
  }

  @media (max-width: ${visualConf.pcMaxWidth}) {
    ${tw`w-full justify-center items-center`}

    // content
    & > div {
      ${tw`justify-center text-gray-700`}
    }
  }

  & > div {
    @media (min-width: ${visualConf.pcMaxWidth}) {
      max-width: ${visualConf.tabletMaxWidth};
    }
  }
`

export const Advise = styled.div``
