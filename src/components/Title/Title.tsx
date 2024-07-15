import { TitleProps } from './Title.props';
import styles from './Title.module.css';
import cn from 'classnames';

function Title({ children, className }: TitleProps) {
    return <h1 className={cn(styles['title'], className)}>{children}</h1>;
}

export default Title;
