import classNames from 'classnames';
import DeleteIcon from '../../shared/assets/icons/delete.svg?react';
import EditIcon from '../../shared/assets/icons/edit.svg?react';
import { CircularProgressBar } from '../../shared/ui/CircularProgressBar/CircularProgressBar';
import styles from './TaskCard.module.scss';
import { Task } from '../../shared/lib/types';

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { title, priority, status, progress } = task;

  const priorityClass = styles[`priority${priority.charAt(0).toUpperCase() + priority.slice(1)}`];

  const statusClass = styles[`status${status.charAt(0).toUpperCase() + status.slice(1)}`];

  return (
     <div className={styles.taskCard}>
      <div className={classNames('flex', 'w-100')}>
        <span className={styles.taskTitle}>Задача</span>
        <span className={styles.task}>{title}</span>
      </div>
      <div className="flex">
        <span className={styles.priorityTitle}>Приоритет</span>
        <span className={classNames(priorityClass, styles.priority)}>
          {priority}
        </span>
      </div>
      <div className={styles.taskStatusWrapper}>
        <button className={classNames(statusClass, styles.status)}>
          {status}
        </button>
      </div>
      <div className={styles.progress}>
        <CircularProgressBar
          strokeWidth={2}
          sqSize={24}
          percentage={progress}
        />
      </div>
      <div className={styles.actions}>
        <EditIcon className="mr-20 cp" onClick={() => {}} />
        <DeleteIcon className="cp" onClick={() => {}} />
      </div>
    </div>
  );
};
