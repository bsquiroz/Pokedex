import React from 'react'
import { useForm } from "react-hook-form"

const Form = ({ types, setSearch }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {

    if(data.type === ""){
      setSearch(data.idOrName)
    } else if(data.idOrName === ""){
      setSearch([data.type, 1])
    } else {
      alert("Elija uno O el otro, pero no los dos")
    }

    reset({
      data:null
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="idOrName" ref={register} placeholder="Enter id or name"/>
      <select name="type" ref={register}>
        <option value="">Types</option>
        {types.map((e) => (
          <option key={e.name} value={e.name}>{e.name}</option>
        ))}
      </select>
      <button>Send</button>
    </form>
  )
}

export default Form
