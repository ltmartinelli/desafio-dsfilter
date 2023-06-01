import { Card } from '../Card';
import * as productService from '../../services/product-service.ts'
import './styles.css';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../models/product';

export default function Listing()
{

    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(
        () => 
        {
            setProducts(productService.findByPrice(0, 10000));
        },
        [products]
    )

    return (
        <section className="listing-container">
            {
                products.map(product => <Card key={product.id} product={product} />)
            }
        </section>
    );
}