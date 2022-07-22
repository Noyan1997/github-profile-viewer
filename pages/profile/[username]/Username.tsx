import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Information from '../../../components/Profile/Information'
import Repository from '../../../components/Profile/Repository'
import { IUserData } from '../../../interface/global'

const UserName: NextPage<{ users: IUserData }> = ({ users }) => {
  const { push } = useRouter()
  const isMountedRef = useRef<boolean>(false)
  useEffect(() => {
    if (users.message && !isMountedRef.current) {
      toast.error('There is no user with this username')
      // prevent to extra routing and rerendering
      isMountedRef.current = true
      push('/')
    }
  }, [])
  if (users.message) return null

  return (
    <>
      <div className="row user_profile_parrent">
        <Information users={users} />
        <Repository users={users} />
      </div>
    </>
  )
}

export default UserName
