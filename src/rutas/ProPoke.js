import React, {useState, useEffect} from 'react'
import axios from "axios"
import { useParams, Link } from 'react-router-dom'

const ProPoke = () => {
  const id = useParams().id

  const [poke, setPoke] = useState();

  useEffect(() => {
    const res = axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
      res.then((response) => setPoke(response.data))
  }, [id])

  console.log(poke);

  return (
    <div>
      {poke &&
        <>
          <h1>{poke.name}</h1>
          <Link to={`/pokemon/${id}/${poke.name}`}>
            <p>{id}</p>
          </Link>
          
          <div>
            <img src={poke.sprites.front_default} alt={id}/>
          </div>
          <p>Aqui va todo con respecto al pokemon</p>
          <div>
            <span><strong>
              <Link to="/pokemon">
                <button>
                  Gordo, me voy mor.
                </button>

              </Link>
            </strong></span>
          </div>
        </>
      }
    </div>
  )
}

export default ProPoke
