import React from 'react'
import {Link} from "react-router-dom"

const CardPoke = ({ info }) => {

  if(info) {
    const name = info.name
    const id = info.id
    const img = info.sprites.front_default

    return (
      <div>
        <h4>{name}</h4>
        <Link to={`pokemon/${id}`}>
          <span><strong># {id}</strong></span>
        </Link>
        <div>
          <img src={img} alt={name}/>
        </div>
      </div>
    )
  }
}

export default CardPoke
