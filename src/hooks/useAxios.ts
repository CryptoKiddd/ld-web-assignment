import axios, { AxiosRequestConfig } from "axios"
import {useEffect,useState} from 'react'



export const useAxios = <T>(config:AxiosRequestConfig<any>):[boolean, T | undefined, string]=>{
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<T>()
  const [error, setError] = useState('')

  useEffect(()=>{
    (
      async ()=>{
        try {
          setLoading(true)
          const {data} = await axios(config)
          setError('')
          setData(data)
          setLoading(false)
        } catch (error:unknown) {
          if (error instanceof Error){
            setError(error.message)
          }else{
            setError('Unknown Failure')
          }
          setLoading(false)
          
        }
      }
    )()
  },[])

  return [ loading, data, error]
  
  }