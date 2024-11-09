import React from 'react'

import * as CSS from './Links.styled'
import { appConfig } from '../../configs/appConfig/repos'

const Links = () => {
  return (
    <>
      {appConfig.repos.map((link, idx) => (
        <CSS.Link id="nav-link" key={idx}>
          <a id="nav-link" href={link.to} children={link.title} />
        </CSS.Link>
      ))}
    </>
  )
}

export { Links }
