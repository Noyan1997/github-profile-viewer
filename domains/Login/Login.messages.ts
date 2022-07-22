import { defineMessages } from 'react-intl'

const scope = 'loginMessage'
const loginMessage = defineMessages({
  login: {
    id: `${scope}.login`,
    defaultMessage: 'GitHub Profile viewer',
  },
  submitButton: {
    id: `${scope}.submitButton`,
    defaultMessage: 'View Profile',
  },
  fetchingProfile: {
    id: `${scope}.fetchingProfile`,
    defaultMessage: 'Fetching Profile',
  },
})
export default loginMessage
