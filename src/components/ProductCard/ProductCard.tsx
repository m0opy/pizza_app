import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';

function ProductCard(props: ProductCardProps) {
    return (
        <div className={styles['container']}>
            <img
                src={props.image}
                className={styles['image']}
                alt="Изображение пиццы"
            />
            <div className={styles['price']}>
                {props.price}
                <span className={styles['currency']}>₽</span>
            </div>
            <button className={styles['cart-btn']}>
                <img src="/cart-btn-icon.svg" alt="Добавить в корзину" />
            </button>
            <div className={styles['rating']}>
                {props.rating}
                <img src="/star-icon.svg" alt="Иконка звезды" />
            </div>
            <h2 className={styles['title']}>{props.title}</h2>
            <p className={styles['compound']}>{props.compound}</p>
        </div>
    );
}

export default ProductCard;
