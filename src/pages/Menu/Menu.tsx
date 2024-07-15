import MenuSearch from '../../components/MenuSearch/MenuSearch';
import ProductCard from '../../components/ProductCard/ProductCard';
import Title from '../../components/Title/Title';
import styles from './Menu.module.css';

export function Menu() {
    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                <Title>Меню</Title>
                <MenuSearch />
            </div>
            <ProductCard
                id={1}
                image="/product-demo.svg"
                price={300}
                rating={4.5}
                title="Наслаждение"
                compound="Салями, руккола, помидоры, оливки"
            />
        </div>
    );
}
