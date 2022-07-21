import type { NextPage } from 'next'
import { IInformation } from '../../../interface/global'

const Information: NextPage<IInformation> = ({ users }) => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* <img width="30px" height="30px" alt="" src={avatar_url ?? ''} /> */}
        <img width="30px" height="30px" alt="" src={users.avatar_url} />
        {users.name && <span>Name : {users.name}</span>}
        <span>{`UserName : ${users.login}`}</span>
        <span> {`Followers :  ${users.followers}`}</span>
        <span> {`Following:  ${users.following}`}</span>
        {users.bio && <span>Bio:{users.bio}</span>}
        {users.location && <span>Location :{users.location}</span>}
        {users.blog && (
          <a target="_blank" href={users.blog}>
            {' '}
            Blog: {users.blog}
          </a>
        )}
      </div>
    </>
  )
}

export default Information
