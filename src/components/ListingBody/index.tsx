import { useContext, useEffect, useState } from 'react';
import Filter from '../Filter';
import Listing from '../Listing';
import * as productService from '../../services/product-service.ts'
import './styles.css';
import { ProductDTO } from '../../models/product';
import { ContextProductCount } from '../../utils/context-products.ts';

export default function ListingBody()
{

    const [products, setProducts] = useState<ProductDTO[]>(productService.findByPrice(0, Number.MAX_VALUE));


    const { setContextProductCount } = useContext(ContextProductCount);

    useEffect(() =>
    {
        setContextProductCount(products.length);
    }, [products]);

    function handleFilter(minPrice: number, maxPrice: number)
    {
        setProducts(productService.findByPrice(minPrice, maxPrice));
    }


    return (
        <main>
            <div className="container listing-body-content">
                <Filter onFilter={handleFilter} />
                <Listing products={products} />
            </div>
        </main>
    );
}