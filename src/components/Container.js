import React, {useEffect, useState} from 'react'
import ContentPoke from "./ContentPoke"
import axios from "axios"

const Container = ({search}) => {
  const [url, setUrl] = useState()
  const [data, setData] = useState()
  
  useEffect(() => {
    const res = axios.get(url)
    res.then((response) => {
      setData(response)
    })  
  }, [url])

  useEffect(() => {
    if (typeof(search) === "string") {
      const url = `https://pokeapi.co/api/v2/pokemon/${search}`
      setUrl(url)
    } else if (typeof(search) === "object") {
      const url =  `https://pokeapi.co/api/v2/type/${search[0]}`
      setUrl(url)
    }

  }, [search])

  return (
    <div>
      {data && <ContentPoke data={data} />}
    </div>
  )
}

export default Container
