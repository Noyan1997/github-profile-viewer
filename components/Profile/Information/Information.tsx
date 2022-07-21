import AttachFileIcon from '@mui/icons-material/AttachFile'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PeopleIcon from '@mui/icons-material/People'
import type { NextPage } from 'next'
import { IInformation } from '../../../interface/global'

const Information: NextPage<IInformation> = ({ users }) => {
  return (
    <>
      <div className="info_patternt column">
        {/* <img width="30px" height="30px" alt="" src={avatar_url ?? ''} /> */}
        <img alt="" src={users.avatar_url} />
        {users.name && <span> {users.name}</span>}
        <span>{users.login}</span>
        <button type="button">
          <span>Follow</span>
        </button>
        <div>{users.bio && <span>{users.bio}</span>}</div>

        <div className="followers a-center">
          {' '}
          <PeopleIcon className="icon" /> <span>{users.followers}</span>{' '}
          Followrs . <span>{users.following}</span> Following
        </div>

        {/* <span> {`Following:  ${users.following}`}</span> */}
        {users.location && (
          <span className="a-center">
            <LocationOnIcon className="icon" />
            {users.location}
          </span>
        )}
        {users.blog && (
          <a className="a-center" target="_blank" href={users.blog}>
            {' '}
            <AttachFileIcon className="icon" /> {users.blog}
          </a>
        )}
      </div>
    </>
  )
}

export default Information
