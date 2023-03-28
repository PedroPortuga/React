import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/Listitem';
import { AddArea } from './components/AddArea'; 


const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Tomar café', done: true },
    { id: 2, name: 'Ir pra academia', done: false },
    { id: 3, name: 'Abrir o vidro', done: true },
    { id: 4, name: 'Procurar emprego', done: false },
    { id: 5, name: 'Começar os projetos', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>


        <AddArea onEnter={handleAddTask} />
        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>

          
        ))}
      </C.Area>
    </C.Container>

  );

};

export default App;
