import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const UserName: NextPage = (props: any) => {
  const { query, push } = useRouter()
  if (props.users.message) {
    // window.alert('nadari')
    push('/')
    return null
  }
  return <span>{`UserName ${query.username}`}</span>
}

export default UserName
