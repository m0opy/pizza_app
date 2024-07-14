import MenuSearch from '../../components/MenuSearch/MenuSearch';
import Title from '../../components/Title/Title';
import styles from './Menu.module.css';

export function Menu() {
    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                <Title>Меню</Title>
                <MenuSearch />
            </div>
        </div>
    );
}
