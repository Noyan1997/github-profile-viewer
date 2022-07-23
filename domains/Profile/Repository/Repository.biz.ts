import { useEffect, useState } from 'react'
import { IRepository, IUserData } from '../../../interface/global'

const useRepository = (users: IUserData) => {
  const [info, setInfo] = useState<IRepository[] | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [currentPage, setCarrentPage] = useState<number>(1)
  const itemPerPage = 6

  useEffect(() => {
    generateUserRepo(1)
  }, [])

  const handleClick = (pageNumber: number) => {
    setCarrentPage(pageNumber)
    generateUserRepo(pageNumber)
  }

  const generateUserRepo = (_page = 1) => {
    setIsFetching(true)
    fetch(
      `${users.repos_url}?sort=updated&per_page=${itemPerPage}&page=${_page}`
    ).then(async (data) => {
      const res = await data.json()
      setInfo(res)
      setIsFetching(false)
    })
  }
  const _pagesCount: number = Math.ceil(
    Number(users?.public_repos ?? 0) / itemPerPage
  )

  return {
    info,
    currentPage,
    handleClick,
    isFetching,
    _pagesCount,
  }
}
export default useRepository
