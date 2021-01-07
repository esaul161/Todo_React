import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import EditForm from "./editForm";
import { ListGroup, Button } from "react-bootstrap";

export default function SubToDoItemList({
  title,
  activeItem,
  index,
  subToDos,
  editSubToDo,
  deleteSubToDo
}) {
  const [edit, setEdit] = React.useState({ enable: false, index: -1 });
  const expanded = activeItem === index;
  const cls = "sidebar-nav-menu-item " + (expanded ? "item-active" : "");

  let showEdit = (index) => {
    setEdit({ enable: true, index: index });
  };

  let hideEdit = () => {
    setEdit({ enable: false, index: -1 });
  };

  return (
    <ListGroup className={"subList"}>
      {subToDos &&
        subToDos.map((element, index) => {
          return (
            <ListGroup.Item className={"subListItem"} key={element + index}>
              <div className={cls} key={index}>
                <div className="">
                  {edit.index === index ? (
                    <div>
                      <EditForm
                        parent={title}
                        text={element}
                        index={index}
                        hideEdit={hideEdit}
                        editSubToDo={editSubToDo}
                      />
                    </div>
                  ) : (
                    <h2 className={"nameSubToDo"}>{element}</h2>
                  )}
                  <div>
                    <Button
                      className={"editSubToDo"}
                      disabled={edit.enable}
                      onClick={() => showEdit(index)}
                    >
                      <MdEdit />
                    </Button>
                    <Button
                      className={"removeSubToDo"}
                      variant="danger"
                      onClick={() => deleteSubToDo(title, element)}
                    >
                      <MdDelete />
                    </Button>
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
}
