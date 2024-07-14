import styles from './AuthorizationInput.module.css';
import { forwardRef } from 'react';
import { InputProps } from './AuthorizationInput.props';
import cn from 'classnames';

const AuthorizationInput = forwardRef<HTMLInputElement, InputProps>(
    function AuthorizationInput(
        { usageInput, placeholder, typeInput, isValid = true, ...props },
        ref,
    ) {
        return (
            <label className={styles['label']}>
                {usageInput}
                <input
                    ref={ref}
                    className={cn(styles['input'], {
                        [styles['invalid']]: !isValid,
                    })}
                    placeholder={placeholder}
                    type={typeInput}
                    {...props}
                />
            </label>
        );
    },
);

export default AuthorizationInput;
