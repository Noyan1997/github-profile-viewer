export { default } from './Username'

export const getServerSideProps = async (context: any) => {
  const _userName = context.query.username
  const res = await fetch(`https://api.github.com/users/${_userName}`)
  const users = await res.json()
  //   console.log(2222, context)
  return {
    props: { users },
  }
}
