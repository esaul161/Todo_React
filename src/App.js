import React from "react";
import "./styles.css";
import MainToDoList from "./components/mainToDoList";
import AddForm from "./components/addForm";

export default function App() {
  const [toDos, setToDo] = React.useState([]);
  const [text, setText] = React.useState("");

  let addToDo = (value) => {
    setToDo([...toDos, { key: value, value: value, subToDos: [] }]);
    setText("");
  };

  let addSubToDo = (key, value) => {
    let toDoObjectList = [...toDos];
    Object.entries(toDoObjectList).map((element) => {
      if (element[1].key === key) {
        element[1].subToDos = [...element[1].subToDos, value];
      }
    });
    setToDo(toDoObjectList);
  };

  let editToDo = (key, newValue) => {
    let toDoObjectList = [...toDos];
    Object.entries(toDoObjectList).map((element) => {
      if (element[1].key === key) {
        element[1].value = newValue;
        element[1].key = newValue;
      }
    });
    setToDo(toDoObjectList);
  };

  let editSubToDo = (key, oldValue, newValue) => {
    let toDoObjectList = [...toDos];
    Object.entries(toDoObjectList).map((element, index, array) => {
      if (element[1].key === key) {
        let auxArr = element[1].subToDos;
        let index = auxArr.findIndex((element) => element === oldValue);

        element[1].subToDos[index] = newValue;
      }
    });
    setToDo(toDoObjectList);
  };

  let deleteToDo = (key) => {
    let toDoObjectList = [...toDos];
    toDoObjectList.splice(
      toDoObjectList.findIndex((item) => item.key === key),
      1
    );
    setToDo(toDoObjectList);
  };

  let deleteSubToDo = (key, valueSubList) => {
    let toDoObjectList = [...toDos];
    Object.entries(toDoObjectList).map((element, index, array) => {
      if (element[1].key === key) {
        let auxArr = element[1].subToDos;
        let index = auxArr.findIndex((element) => element === valueSubList);
        auxArr.splice(index, 1);
      }
    });
    setToDo(toDoObjectList);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <br />
      <AddForm addToDo={addToDo} />
      <br />
      <MainToDoList
        toDoList={toDos}
        editToDo={editToDo}
        addSubToDo={addSubToDo}
        editSubToDo={editSubToDo}
        deleteToDo={deleteToDo}
        deleteSubToDo={deleteSubToDo}
      />
    </div>
  );
}
