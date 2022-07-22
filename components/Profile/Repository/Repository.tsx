import { Box, Center } from '@chakra-ui/layout'
import ForkRightIcon from '@mui/icons-material/ForkRight'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import type { NextPage } from 'next'
import { useEffect, useMemo, useRef, useState } from 'react'
import { IInformation } from '../../../interface/global'

const Repository: NextPage<IInformation> = ({ users }) => {
  const [info, setInfo] = useState<[]>([])
  const [currentPage, setCarrentPage] = useState<number>(1)
  const itemPerPage = 6

  useEffect(() => {
    generateUserRepo()
  }, [])

  const handleClick = (pageNumber: number) => {
    setCarrentPage(Number(pageNumber))
  }

  const indexOfLastItem = useMemo(
    () => currentPage * itemPerPage,
    [currentPage]
  )
  const indexOfFirstItem = useMemo(
    () => indexOfLastItem - itemPerPage,
    [indexOfLastItem]
  )

  const pagesCount = useRef<number>(1)
  // for (let i = 1; i < Math.ceil(info.length / itemPerPage); i++) {
  //   pages.push(i)
  // }

  const renderPageNumbers = useMemo(() => {
    pagesCount.current = Math.ceil(info.length / itemPerPage)
    return Array(pagesCount.current)
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
  }, [info.length, currentPage])

  const generateUserRepo = () => {
    fetch(users.repos_url).then(async (data) => {
      const res = await data.json()
      setInfo(res)
    })
  }
  return (
    <>
      <div className="column gride_container">
        {!info.length && (
          <Center h="100px">
            <span>Loading...</span>
          </Center>
        )}
        {info.slice(indexOfFirstItem, indexOfLastItem).map((info: any) => (
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
            <span>{info.description}</span>
            <div className="row t-row">
              <span className="a-center">{info.language}</span>
              <span className="a-center">
                <StarBorderIcon />
                {info.stargazers_count}
              </span>
              <span className="a-center">
                <ForkRightIcon />
                {info.forks}
              </span>
            </div>
          </Box>
        ))}
        <ul className="pageNumbers">{renderPageNumbers}</ul>
      </div>
    </>
  )
}

export default Repository
