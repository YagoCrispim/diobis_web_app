import styled from 'styled-components'
import tw from 'twin.macro'

import { visualConf } from '../../configs/visuals/visuals'

export const Grid = styled.div`
  ${tw`w-full grid grid-cols-4 gap-6 mb-12`}
  ${tw`plus-2xl:grid-cols-3`}
  ${tw`plus-lg:grid-cols-2`}
  ${tw`plus-sm:grid-cols-1`}

  max-width: ${visualConf.pcMaxWidth};
  padding-left: 1rem;
  padding-right: 1rem;
`
