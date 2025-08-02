import { Button } from '../../shared/ui/Button/Button';
import { Modal } from '../../shared/ui/Modal/Modal';
import styles from './DeleteModal.module.scss';

export const DeleteModal = () => {
  return (
    <Modal>
      <div className={styles.deleteModal}>
        <p>Точно удалить задачу?</p>
        <div className={styles.deleteModalActions}>
          <Button title="Удалить" onClick={() => {}} />
          <Button title="Выйти" outline onClick={() => {}} />
        </div>
      </div>
    </Modal>
  );
};
