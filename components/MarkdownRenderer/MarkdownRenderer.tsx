import React from 'react'
import { GitHubReader } from './MarkdownRenderer.styled'
import GitHubPlugin from 'remark-gfm'

interface Props {
  children: any
}

const MarkdownRenderer = ({ children }: Props) => {
  return <GitHubReader plugins={[GitHubPlugin]}>{children}</GitHubReader>
}

export { MarkdownRenderer }
