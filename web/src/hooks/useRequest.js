import { useState, useEffect } from 'react'
import axios from 'axios'

export const useRequest = (url, initialState) => {
  const [ data, setData ] = useState(initialState)
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    getData()

  }, [url])

  const getData = () => {
    setIsLoading(true)

    axios
      .get(`http://localhost:3003/${url}`)
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        alert("Não conseguimos renderizar o estoque!")
      })
  }

  return [data, getData, isLoading]
  
}