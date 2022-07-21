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
