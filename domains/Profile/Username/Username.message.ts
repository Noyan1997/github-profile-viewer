import { defineMessages } from 'react-intl'

const scope = 'informMessage'
const usernameMessage = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: '{username} Profile',
  },
})
export default usernameMessage
