import styles from './MenuSearch.module.css';

function MenuSearch() {
    return (
        <form className={styles['search-form']}>
            <button className={styles['search-btn']}>
                <img
                    src="/search-icon.svg"
                    className={styles['search-icon']}
                    alt="Иконка поиска по меню"
                />
            </button>
            <input
                placeholder="Введите блюдо или состав"
                type="text"
                className={styles['search-input']}
            />
        </form>
    );
}

export default MenuSearch;
