import React from "react";
import { MdExpandMore, MdAdd, MdEdit, MdDelete } from "react-icons/md";
import EditForm from "./editForm";
import AddForm from "./addForm";
import SubToDoItemList from "./subToDoItemList";
import { Button } from "react-bootstrap";

export default function ToDoItem({
  editToDo,
  title,
  setActiveItem,
  activeItem,
  index,
  subToDos,
  addSubToDo,
  editSubToDo,
  deleteToDo,
  deleteSubToDo
}) {
  const [edit, setEdit] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const expanded = activeItem === index;
  const cls = "sidebar-nav-menu-item " + (expanded ? "item-active" : "");

  let collapseItem = (setActiveItem, index, activeItem) => {
    if (activeItem === index) {
      setActiveItem(-1);
    } else {
      setActiveItem(index);
    }
  };

  let showEdit = () => {
    setEdit(true);
  };

  let hideEdit = () => {
    setEdit(false);
  };

  let showAdd = () => {
    setAdd(true);
  };

  let hideAdd = () => {
    setAdd(false);
  };

  return (
    <div className={cls}>
      <div className="">
        <div className={""}>
          {edit ? (
            <EditForm
              text={title}
              index={index}
              editToDo={editToDo}
              hideEdit={hideEdit}
            />
          ) : (
            <h1 className={"toDoName"}>{title}</h1>
          )}
        </div>
        <div className={"padding-bottom"}>
          <Button className={"edit"} disabled={edit} onClick={() => showEdit()}>
            <MdEdit />
          </Button>
          <Button className={"add"} variant="success" onClick={() => showAdd()}>
            <MdAdd />
          </Button>
          <Button
            className={"delete"}
            variant="danger"
            onClick={() => deleteToDo(title)}
          >
            <MdDelete />
          </Button>
          <Button
            className={"expand"}
            variant="secondary"
            onClick={() => collapseItem(setActiveItem, index, activeItem)}
          >
            <MdExpandMore />
          </Button>
        </div>
      </div>
      {add && (
        <AddForm
          helpText={"Add a new ToDo"}
          addToDo={subToDos}
          addSubToDo={addSubToDo}
          value={title}
          hideAdd={hideAdd}
        />
      )}
      <div className="sidebar-nav-menu-item-body">
        <SubToDoItemList
          title={title}
          subToDos={subToDos}
          editSubToDo={editSubToDo}
          deleteSubToDo={deleteSubToDo}
        />
      </div>
    </div>
  );
}
