import React from "react";
import ToDoItem from "./toDoItem";
import { ListGroup } from "react-bootstrap";

export default function MainToDoList({
  toDoList,
  editToDo,
  addSubToDo,
  editSubToDo,
  deleteToDo,
  deleteSubToDo
}) {
  const [activeItem, setActiveItem] = React.useState(-1);

  return (
    <ListGroup>
      {Object.entries(toDoList).map((element, index) => {
        return (
          <ListGroup.Item key={index + element[1].value}>
            <ToDoItem
              key={index}
              editToDo={editToDo}
              title={element[1].value}
              setActiveItem={setActiveItem}
              index={index}
              activeItem={activeItem}
              subToDos={element[1].subToDos}
              addSubToDo={addSubToDo}
              editSubToDo={editSubToDo}
              deleteToDo={deleteToDo}
              deleteSubToDo={deleteSubToDo}
            />
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
