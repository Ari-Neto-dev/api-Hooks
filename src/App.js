import React,{useState} from 'react'

function App() {

  const[tarefas, setTarefas]=useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);

  const[nome,setNome]=useState([
    ' ARIOSVALDO',
    ' de Azevedo',
    ' Neto'
  ]);

  
  const[input, setInput]= useState(''); 

  function handleAdd(){
  
    setTarefas([...tarefas, input])
    setInput('');
  }



  return (
    <div>
   <ul>
    {tarefas.map(tarefa=>(
      <li key={tarefa}>
        {tarefa}
      </li>

    ))}
   </ul>

   <h1>{nome}</h1>


<input type="text" value={input} onChange={e => setInput(e.target.value)}/>
   <button type="button" onClick={handleAdd}>Adicionar</button>

    </div>
  );
}

export default App;
