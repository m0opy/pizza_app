import styles from './LeftPanel.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

function LeftPanel() {
    return (
        <div className={styles['container']}>
            <img
                src="/avatar.svg"
                alt="Аватар пользователя"
                className={styles['icon']}
            />
            <div className={styles['user-info']}>
                <div className={styles['user-name']}>Полина Щеткина</div>
                <div className={styles['user-email']}>alaricode@ya.ru</div>
            </div>
            <nav className={styles['navigation']}>
                <Link to="/menu" className={styles['link']}>
                    <img src="/menu-icon.svg" alt="Иконка меню" />
                    Меню
                </Link>

                <Link to="/cart" className={styles.link}>
                    <img src="/cart-icon.svg" alt="Иконка" />
                    Корзина
                </Link>
            </nav>
            <Button className={styles['exit']}>
                <img src="/exit-icon.svg" alt="Иконка выхода" />
                Выйти
            </Button>
        </div>
    );
}

export default LeftPanel;
