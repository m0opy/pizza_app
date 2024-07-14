import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    usageInput?: string;
    typeInput: string;
    isValid?: boolean;
}
