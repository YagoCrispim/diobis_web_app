import { AppConfigDto } from './interface'

export const appConfig: AppConfigDto = {
  tagsLimitPerCard: 7,
  repos: [
    {
      title: 'Front-end Br',
      to: '/frontend',
      github_link: 'https://github.com/frontendbr',
    },
    {
      title: 'Back-end Br',
      to: '/backend',
      github_link: 'https://github.com/backend-br',
    },
    {
      title: 'DevOps Brasil',
      to: '/devops',
      github_link: 'https://github.com/DevOps-Brazil',
    },
    {
      title: 'React Br',
      to: '/react',
      github_link: 'https://github.com/react-brasil/vagas',
    },
    {
      title: 'QA Br',
      to: '/qa',
      github_link: 'https://github.com/qa-brasil',
    },
  ],
}
