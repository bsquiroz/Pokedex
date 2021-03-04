import React, {useEffect, useState} from 'react';
import axios from "axios"
import Form from './components/Form';
import Container from './components/Container';

function App() {
  const [types, setTypes] = useState("https://pokeapi.co/api/v2/type")
  const [search, setSearch] = useState();
  
  useEffect(() => {
    const res = axios(types)
    res.then((response) => setTypes(response.data.results))
  }, [types])
  
  return (
    <div className="App">
      { typeof(types) === "object" && <Form types={types} setSearch={setSearch}/> }

      {search && <Container search={search} />}

    </div>
  );
}

export default App;
