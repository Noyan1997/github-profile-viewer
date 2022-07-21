import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IUserData } from '../../../interface/global'

// object destruction
const UserName: NextPage<{ users: IUserData }> = ({
  users: {
    name,
    avatar_url,
    bio,
    followers,
    blog,
    location,
    following,
    message,
    repos_url,
    login,
  },
}) => {
  const { query, push } = useRouter()
  const notify = () => toast('this user is not exsist')
  useEffect(() => {
    if (message) {
      notify()
      console.log('This user isnot exsitst')
      push('/')
    }
  }, [])
  if (message) return null

  fetch(repos_url).then(async (data) => {
    const res = await data.json()
    console.log(res)
  })

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* <img width="30px" height="30px" alt="" src={avatar_url ?? ''} /> */}
        <img width="30px" height="30px" alt="" src={avatar_url} />
        {name && <span>Name : {name}</span>}
        <span>{`UserName : ${query.username}`}</span>
        <span> {`Followers :  ${followers}`}</span>
        <span> {`Following:  ${following}`}</span>
        {bio && <span>Bio:{bio}</span>}
        {location && <span>Location :{location}</span>}
        {blog && (
          <a target="_blank" href={blog}>
            {' '}
            Blog: {blog}
          </a>
        )}
      </div>
    </>
  )
}

export default UserName
