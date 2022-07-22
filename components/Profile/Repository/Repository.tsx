import { Box } from '@chakra-ui/layout'
import ForkRightIcon from '@mui/icons-material/ForkRight'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { IInformation } from '../../../interface/global'

const Repository: NextPage<IInformation> = ({ users }) => {
  const [info, setInfo] = useState<[]>([])
  const [currentPage, setCarrentPage] = useState<number>(1)
  const itemPerPage = 6
  const pageNumberLimit = 10
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(10)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0)

  useEffect(() => {
    generateUserRepo()
  }, [])

  const handleClick = (e: any) => {
    setCarrentPage(Number(e.target.id))
  }

  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage
  //   const currenItem = info.slice(indexOfFirstItem, indexOfLastItem)

  const pages = []
  for (let i = 1; i < Math.ceil(info.length / itemPerPage); i++) {
    pages.push(i)
  }

  const renderPageNumbers = pages.map((number: any) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} id={number} onClick={handleClick}>
          {number}
        </li>
      )
    } else return null
  })

  const handleNextBtn = () => {
    setCarrentPage(currentPage + 1)
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const handlePrevent = () => {
    setCarrentPage(currentPage - 1)
    if ((currentPage - 1) % maxPageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const generateUserRepo = () => {
    fetch(users.repos_url).then(async (data) => {
      const res = await data.json()
      console.log(222, res.name)
      setInfo(res)
    })
  }
  return (
    <>
      <div className="column gride_container">
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
        <ul className="pageNumbers">
          {/* <li>
            <button onClick={handlePrevent}>Prev</button>
          </li> */}

          {renderPageNumbers}
          {/* <li>
            <button onClick={handleNextBtn}>Next</button>
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default Repository
