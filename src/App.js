import React, { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    "Estudar React Hooks",
  ]);

  const [input, setInput] = useState("");

  function handleAdd() {
    setTarefas([...tarefas, input]);
    setInput("");
  }

  const [nome, setNome] = useState("Ariosvaldo");

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <h1>{nome}</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionando
      </button>
    </div>
  );
}

export default App;
