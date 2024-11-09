import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ShareIcon } from '@heroicons/react/outline'

import * as CSS from './PageContent.styled'
import { OthersJobs } from '..'
import { Label, MarkdownRenderer } from '../../../../../../components'
import { JobDto } from '../../../../../../common/interfaces/store/_Jobs/interfaces'
import { ClipboardNotification } from '..'

interface Props {
  JobInfo: JobDto
  OtherJobs: JobDto[]
  repo: string
}

const PageContent = ({ JobInfo, OtherJobs, repo }: Props) => {
  const { pathname } = useRouter()

  const [copiedNotification, setCopiedNotification] = useState(false)

  useEffect(() => {
    if (copiedNotification) {
      setTimeout(() => {
        setCopiedNotification(false)
      }, 2000)
    }
  }, [copiedNotification])

  function copyToClipboard() {
    const url = window.location.href

    navigator.clipboard.writeText(url).then(() => setCopiedNotification(true))
  }

  return (
    <section>
      <Head>
        <title>{JobInfo.job.title}</title>
      </Head>
      <CSS.Container>
        <CSS.Content>
          {/* Informations Bar */}
          <div>
            <CSS.InformationsBar hidden={!OtherJobs.slice(1).length}>
              <div>
                {/* Title and Pic */}
                <div>
                  <img src={JobInfo.user.avatar} alt={JobInfo.user.name} />
                  <h1>{JobInfo.job.title}</h1>
                </div>

                {/* Labels */}
                <CSS.LabelsContainer>
                  {JobInfo.job.labels.slice(0, 6).map(label => (
                    <div key={label.id}>
                      <Label
                        key={label.id}
                        color={label.color}
                        value={label.name}
                      />
                    </div>
                  ))}
                </CSS.LabelsContainer>

                {/* Actions Bar */}
                <CSS.Actions>
                  {OtherJobs.length >= 2 ? (
                    <h1>
                      Outras vagas de <b>{JobInfo.user.name}</b>
                    </h1>
                  ) : <span></span>}

                  <ClipboardNotification
                    text="Link copiado!"
                    visible={copiedNotification}
                  />
                  <ShareIcon
                    color="#364250"
                    onClick={() => copyToClipboard()}
                  />
                </CSS.Actions>
              </div>
              <CSS.MoreJobs>
                <OthersJobs route={pathname.split('/')[1]} repo={repo} />
              </CSS.MoreJobs>
            </CSS.InformationsBar>
          </div>
          <CSS.Markdown>
            <div>
              <MarkdownRenderer>{JobInfo.job.markdown}</MarkdownRenderer>
            </div>
          </CSS.Markdown>
        </CSS.Content>
      </CSS.Container>
    </section>
  )
}

export { PageContent }
