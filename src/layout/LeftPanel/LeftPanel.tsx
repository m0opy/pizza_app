import styles from './LeftPanel.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';
import cn from 'classnames';

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
                <NavLink
                    to="/menu"
                    className={({ isActive }) =>
                        cn(styles['link'], {
                            [styles['active']]: isActive,
                        })
                    }
                >
                    <img src="/menu-icon.svg" alt="Иконка меню" />
                    Меню
                </NavLink>

                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        cn(styles['link'], {
                            [styles['active']]: isActive,
                        })
                    }
                >
                    <img src="/cart-icon.svg" alt="Иконка" />
                    Корзина
                </NavLink>
            </nav>
            <Button className={styles['exit']}>
                <img src="/exit-icon.svg" alt="Иконка выхода" />
                Выйти
            </Button>
        </div>
    );
}

export default LeftPanel;
