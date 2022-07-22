export interface IUserData {
  name: string
  login: string
  avatar_url: string
  followers: string
  following: string
  bio: string
  location: string
  blog: string
  message: string
  repos_url: string
}
export interface IInformation {
  users: IUserData
}

export interface IRepository {
  name: string
  visibility: string
  description: string
  language: string
  stargazers_count: number
  forks: number
  updated_at: string
}
