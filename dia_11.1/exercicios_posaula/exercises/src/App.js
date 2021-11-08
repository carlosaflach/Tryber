import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const tarefas = ['Acordar', 'Lavar o Rosto', 'Escovar os dentes', 'Tomar café'];

function App() {
  return (
    <ul>{ tarefas.map((tarefa) => Task(tarefa)) }</ul>
  );
}

export default App;
