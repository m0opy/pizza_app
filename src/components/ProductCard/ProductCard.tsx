import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';

function ProductCard({
    image,
    price,
    rating,
    title,
    compound,
}: ProductCardProps) {
    return (
        <div className={styles['container']}>
            <img
                src={image}
                className={styles['image']}
                alt="Изображение пиццы"
            />
            <div className={styles['price']}>
                {price}
                <span className={styles['currency']}>₽</span>
            </div>
            <button className={styles['cart-btn']}>
                <img src="/cart-btn-icon.svg" alt="Добавить в корзину" />
            </button>
            <div className={styles['rating']}>
                {rating}
                <img src="/star-icon.svg" alt="Иконка звезды" />
            </div>
            <h2 className={styles['title']}>{title}</h2>
            <p className={styles['compound']}>{compound}</p>
        </div>
    );
}

export default ProductCard;
