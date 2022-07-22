import { GetServerSideProps } from 'next'

export { default } from '../../../domains/Profile/Username/Username'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const _userName = context.query.username
  const res = await fetch(`https://api.github.com/users/${_userName}`)
  const users = await res.json()
  return {
    props: { users },
  }
}
