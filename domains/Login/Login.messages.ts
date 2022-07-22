import { defineMessages } from 'react-intl'

const scope = 'loginMessage'
const loginMessage = defineMessages({
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Sign in to GitHub',
  },
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: 'Sign in',
  },
  fetchingProfile: {
    id: `${scope}.fetchingProfile`,
    defaultMessage: 'Fetching Profile',
  },
})
export default loginMessage
