import { ContextProductCount } from '../../utils/context-products';
import { useContext } from 'react';
import './styles.css';

export default function Header()
{
    const { contextProductCount } = useContext(ContextProductCount);

    return (
        < header >
            <div className="container header-container">
                <h1>DSFilter</h1>
                <p>{contextProductCount} produto{contextProductCount != 1 && <span>s</span>}</p>
            </div>
        </header >
    );
}