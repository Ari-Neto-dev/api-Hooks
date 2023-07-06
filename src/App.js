import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);

  const [nome, setNome] = useState([" ARIOSVALDO", " de Azevedo", " Neto"]);

  const [input, setInput] = useState("");

  useEffect(() => {
    const tarefaStorage = localStorage.getItem("tarefas");
    if (tarefaStorage) {
      setTarefas(JSON.parse(tarefaStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput("");
  }, [tarefas, input]);

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <h1>{nome}</h1>

      <br />

      <strong>Você tem {totalTarefas}tarefas! </strong>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
}

export default App;
