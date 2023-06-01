import { useState } from 'react';
import './styles.css';

type FormData = {
    minPrice?: number;
    maxPrice?: number;
}

type Props = {
    onFilter: (minPrice: number, maxPrice: number) => void;
}

export default function Filter({ onFilter }: Props)
{

    const [formData, setFormData] = useState<FormData>({})

    function handleInputChange(event: any)
    {
        const value = event.target.value;
        const name = event.target.name;
        setFormData(
            {
                ...formData, [name]: value,
            }
        )
    }

    function handleSubmit(event: any)
    {
        event.preventDefault();
        onFilter(formData.minPrice || 0, formData.maxPrice || Number.MAX_VALUE);
    }

    return (
        <section>
            <form onSubmit={handleSubmit} className="form-container">
                <input onChange={handleInputChange} name="minPrice" value={formData.minPrice || ""} type="text" placeholder='Preço Mínimo' />
                <input onChange={handleInputChange} name="maxPrice" value={formData.maxPrice || ""} type="text" placeholder='Preço Máximo' />
                <button> Filtrar </button>
            </form>
        </section>
    );
}