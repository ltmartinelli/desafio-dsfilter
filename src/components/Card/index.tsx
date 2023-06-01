import { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
    product: ProductDTO;
}

export function Card({ product }: Props)
{
    return (
        <div className="listing-card">
            <p className="product-name">{product.name}</p>
            <h2>R$ {product.price.toFixed(2)}</h2>
        </div>
    );
}