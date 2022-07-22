import { defineMessages } from 'react-intl'

const scope = 'informMessage'
const informMessage = defineMessages({
  follower: {
    id: `${scope}.follower`,
    defaultMessage: '{followerCount} Followers',
  },
  following: {
    id: `${scope}.following`,
    defaultMessage: '{followingCount} Following',
  },
})
export default informMessage
