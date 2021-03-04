import React from 'react'
import Pag from "../pagination/Pag"
import CardPoke from './CardPoke'

const ContentPoke = ({data:info}) => {

  if(info.data.pokemon) {
    return (
      <>
        <Pag array={info.data.pokemon} totalForPag={4}/>
      </>
    )
  } else {
      return (
        <CardPoke info={info.data}/>
      )
  }
}

export default ContentPoke
