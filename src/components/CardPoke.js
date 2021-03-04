import React from 'react'

const CardPoke = ({ info }) => {

  if(info) {
    const name = info.name
    const id = info.id
    const img = info.sprites.front_default

    return (
      <div>
        <h4>{name}</h4><span><strong># {id}</strong></span>
        <div>
          <img src={img} alt={name}/>
        </div>
      </div>
    )
  }
}

export default CardPoke
