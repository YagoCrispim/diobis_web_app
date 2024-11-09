import { Octokit } from '@octokit/rest'
import { ResultDto } from '../common/interfaces/store/services/interfaces'
import { ArrayToJob, ObjectToJob, toError } from './Jobs.mapper'

class GitHubService {
  service: Octokit

  constructor() {
    this.service = new Octokit()
  }

  getAll(page = 1, owner = 'frontendbr') {
    return this.service
      .paginate(
        'GET /repos/{owner}/{repo}/issues',
        {
          owner: owner,
          repo: 'vagas',
          page: page,
        },
        ({ data }, done) => {
          done()
          return data
        }
      )
      .then(
        (success: any) => Promise.resolve(ArrayToJob(success)),
        (error: ResultDto) => Promise.reject(toError(error))
      )
  }

  getByID(id: number | string, owner = 'frontendbr') {
    return this.service.issues
      .get({
        owner: owner,
        repo: 'vagas',
        issue_number: Number(id),
      })
      .then(
        success => Promise.resolve(ObjectToJob(success.data)),
        error => Promise.reject(toError(error))
      )
  }

  getByUser(userName: string, repo = 'frontendbr') {
    return this.service.issues
      .listForRepo({
        owner: repo,
        repo: 'vagas',
        creator: userName,
      })
      .then(
        (success: any) => Promise.resolve(ArrayToJob(success.data)),
        error => Promise.reject(toError(error))
      )
  }
}

export default new GitHubService()
