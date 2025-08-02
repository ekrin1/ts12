import styles from "./TodoList.module.scss";
import Add from '../../shared/assets/icons/add.svg?react';
import { AddEditTaskModal } from '../../features/AddEditTaskModal/AddEditTaskModal';
import { Button } from '../../shared/ui/Button/Button';
import { DeleteModal } from '../../features/DeleteModal/DeleteModal';
import { TaskCard } from '../../entities/TaskCard/TaskCard';
import { taskList } from '../../shared/mocks/serverData/taskList';

export const TodoList = () => {
  const showAddEditModal = false;
  const showDeleteModal = false;
  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.topTitle}>
          <h2>Список задач</h2>
          <Button title="Добавить задачу" icon={<Add />} onClick={() => {}} />
        </div>
        <div className={styles.taskContainer}>
            {taskList.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
      {showAddEditModal && <AddEditTaskModal />}
      {showDeleteModal && <DeleteModal />}
    </>
  );
};
