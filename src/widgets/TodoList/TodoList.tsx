import "./style.scss"
import Add from '../../shared/assets/icons/add.svg?react';
import { AddEditTaskModal } from '../../features/AddEditTaskModal/AddEditTaskModal';
import { Button } from '../../shared/ui/Button/Button';
import { DeleteModal } from '../../features/DeleteModal/DeleteModal';
import { TaskCard } from '../../entities/TaskCard/TaskCard';
import { taskList } from '../../serverData/taskList';

export const TodoList = () => {
  const showAddEditModal = false;
  const showDeleteModal = false;
  return (
    <>
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Список задач</h2>
          <Button title="Добавить задачу" icon={<Add />} onClick={() => {}} />
        </div>
        <div className="task-container">
          {taskList.map((task) => (
            <TaskCard task={task} />
          ))}
        </div>
      </div>
      {showAddEditModal && <AddEditTaskModal />}
      {showDeleteModal && <DeleteModal />}
    </>
  );
};
