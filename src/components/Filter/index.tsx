import './styles.css';

export default function Filter()
{
    return (
        <section>
            <form className="form-container">
                <input type="text" placeholder='Preço Mínimo'/>
                <input type="text" placeholder='Preço Máximo'/>
                <button>Filtrar </button>
            </form>
        </section>
    );
}