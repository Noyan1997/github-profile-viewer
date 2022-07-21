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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {info.slice(indexOfFirstItem, indexOfLastItem).map((info: any) => (
          <div style={{ border: '1px solid' }}>
            <h6>{info.name}</h6>
          </div>
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
