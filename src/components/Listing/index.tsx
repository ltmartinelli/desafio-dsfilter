import { ProductDTO } from '../../models/product';
import { Card } from '../Card';
import './styles.css';

type Props = {
    products: ProductDTO[]
}

export default function Listing({ products }: Props)
{    
    return (
        <section className="listing-container">
            {
                products.map(product => <Card key={product.id} product={product} />)
            }
        </section>
    );
}