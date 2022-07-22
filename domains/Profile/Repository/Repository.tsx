import { Box } from '@chakra-ui/layout'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Spinner,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useMemo } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'
import { FormattedMessage } from 'react-intl'
import { IInformation } from '../../../interface/global'
import useRepository from './Repository.biz'
import repoMsg from './Repository.message'

const Repository: NextPage<IInformation> = ({ users }) => {
  const { currentPage, handleClick, info, isFetching, _pagesCount } =
    useRepository(users)

  const renderPageNumbers = useMemo(() => {
    return Array(_pagesCount)
      .fill(undefined)
      .map((_, index: number) => {
        const _page = index + 1
        return (
          <li
            className={_page === currentPage ? 'active' : ''}
            onClick={() => handleClick(_page)}
          >
            {_page}
          </li>
        )
      })
  }, [info?.length, currentPage])

  const fetchingSection = useMemo(() => {
    if (isFetching)
      return (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )
    else if (info !== null && !info?.length && !isFetching)
      return (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>
            <FormattedMessage {...repoMsg.toastTitle} />
          </AlertTitle>
          <AlertDescription>
            <AlertTitle>
              <FormattedMessage {...repoMsg.toastDescription} />
            </AlertTitle>
          </AlertDescription>
        </Alert>
      )
  }, [info?.length, isFetching])

  return (
    <>
      <div className="column gride_container">
        {fetchingSection}
        {!isFetching &&
          info?.map((info) => (
            <Box
              as="div"
              borderRadius="md"
              bg="transparent"
              color="#000"
              px={180}
              h={155}
              className="repo_box column "
            >
              <div className="row f-row">
                <span>{info.name}</span>
                <span className="visibility j-center a-center">
                  {info.visibility}
                </span>
              </div>
              <span className="description">{info.description}</span>
              <div className="row t-row">
                <span className="a-center">{info.language}</span>
                <span className="a-center">
                  <AiOutlineStar />
                  {info.stargazers_count}
                </span>
                <span className="a-center">
                  <BiGitRepoForked />
                  {info.forks}
                </span>
              </div>
            </Box>
          ))}
        <div className="pagination">
          <ul className="pageNumbers">{!isFetching && renderPageNumbers}</ul>
        </div>
      </div>
    </>
  )
}

export default Repository
