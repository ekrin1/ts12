import classNames from 'classnames';
import DeleteIcon from '../../shared/assets/icons/delete.svg?react';
import EditIcon from '../../shared/assets/icons/edit.svg?react';
import { CircularProgressBar } from '../../shared/ui/CircularProgressBar/CircularProgressBar';
import './styles.scss';
import { Task } from '../../shared/lib/types';

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { title, priority, status, progress } = task;

  // const priorityClass = `priority${priority.charAt(0).toUpperCase() + priority.slice(1)}`;

  return (
     <div className="task-card">
      <div className="flex w-100">
        <span className="task-title">Задача</span>
        <span className="task">{title}</span>
      </div>
      <div className="flex">
        <span className="priority-title">Приоритет</span>
        <span className={classNames(`priority--${priority}`, 'priority')}>
          {priority}
        </span>
      </div>
      <div className="task-status-wrapper">
        <button className={classNames(`status--${status}`, 'status')}>
          {status}
        </button>
      </div>
      <div className="progress">
        <CircularProgressBar
          strokeWidth={2}
          sqSize={24}
          percentage={progress}
        />
      </div>
      <div className="actions">
        <EditIcon className="mr-20 cp" onClick={() => {}} />
        <DeleteIcon className="cp" onClick={() => {}} />
      </div>
    </div>
  );
};
