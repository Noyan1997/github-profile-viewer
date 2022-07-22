import { useEffect, useMemo, useState } from 'react'
import { IRepository, IUserData } from '../../../interface/global'

const useRepository = (users: IUserData) => {
  const [info, setInfo] = useState<IRepository[] | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)
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

  const generateUserRepo = () => {
    setIsFetching(true)
    fetch(users.repos_url).then(async (data) => {
      const res = await data.json()
      setInfo(res)
      setIsFetching(false)
    })
  }
  const _pagesCount: number = Math.ceil(Number(info?.length ?? 0) / itemPerPage)

  return {
    info,
    currentPage,
    indexOfFirstItem,
    indexOfLastItem,
    handleClick,
    isFetching,
    _pagesCount,
  }
}
export default useRepository
