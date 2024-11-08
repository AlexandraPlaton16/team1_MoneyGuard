import { Icon } from '../../Icons';
import s from './ButtonAddTransactions.module.css';
import { openAddModal } from '../../redux/Modals/slice';
import { useDispatch } from 'react-redux';

const ButtonAddTransaction = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrap}>
      <button
        className={s.btn}
        type="button"
        onClick={() => {
          dispatch(openAddModal());
        }}
      >
        <Icon id="#icon-plus" className={s.icon}></Icon>
      </button>
    </div>
  );
};

export default ButtonAddTransaction;
