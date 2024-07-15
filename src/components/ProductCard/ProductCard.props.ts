import { HTMLAttributes } from 'react';

export interface ProductCardProps
    extends Omit<HTMLAttributes<HTMLElement>, 'id'> {
    id: number;
    image: string;
    price: number;
    rating: number;
    title: string;
    compound: string;
}
