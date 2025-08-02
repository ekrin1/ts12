import classNames from 'classnames';
import Close from '../../shared/assets/icons/close.svg?react';
import { Button } from '../../shared/ui/Button/Button';
import { Input } from '../../shared/ui/Input/Input';
import { Modal } from '../../shared/ui/Modal/Modal';
import styles from './AddEditTaskModal.module.scss';

export const AddEditTaskModal = () => {
  return (
    <Modal>
      <form>
        <div className={styles.addEditModal}>
          <div className={styles.flxBetween}>
            <span className={styles.modalTitle}>Добавить задачу</span>
            <Close className="cp" onClick={() => {}} />
          </div>
          <Input
            label="Задача"
            placeholder="Введите текст.."
            onChange={() => {}}
            name="title"
            value=""
          />
          <div className={styles.modalPriority}>
            <span>Приортитет</span>
            <ul className={styles.priorityButtons}>
              {['high', 'medium', 'low'].map((priority) => (
                <li
                  key={priority}
                  className={classNames(
                    styles[`${priority}Selected`],
                    styles[priority]
                  )}
                >
                  {priority}
                </li>
              ))}
            </ul>
          </div>
          <div className={classNames(styles.flxRight, styles.mt50)}>
            <Button title="Добавить" onClick={() => {}} />
          </div>
        </div>
      </form>
</Modal>
  );
};
