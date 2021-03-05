import React, {useState, useEffect} from 'react'
import axios from "axios"
import { useParams, Link } from 'react-router-dom'

const Counter = () => {

  const [location, setLocation] = useState();
  const poke = useParams().id

  useEffect(() => {
    const res = axios(` https://pokeapi.co/api/v2/pokemon/${poke}`)
     res.then((response) => setLocation(response.data))
  }, [poke])

  return (
    <div>
      { location && 
        <div>
          <h1>{location.name}</h1>
          <span># {location.id}</span>
          <p>Aqui van las <strong>ubicaciones</strong> de donde este carajado esta</p>
          <Link to={`/pokemon/${poke}`}>
            volver a pokemon
          </Link>
        </div>
      }
    </div>
  )
}

export default Counter
