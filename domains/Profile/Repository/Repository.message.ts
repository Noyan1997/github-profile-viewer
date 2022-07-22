import { defineMessages } from 'react-intl'

const scope = 'informMessage'
const repoMessage = defineMessages({
  toastTitle: {
    id: `${scope}.toastTitle`,
    defaultMessage: 'Repository not Found!',
  },
  toastDescription: {
    id: `${scope}.toastDescription`,
    defaultMessage: 'Your Repository has not any item.',
  },
})
export default repoMessage
