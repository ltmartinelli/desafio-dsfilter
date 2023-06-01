import Filter from '../Filter';
import Listing from '../Listing';
import './styles.css';

export default function ListingBody()
{
    return (
        <main>
            <div className="container listing-body-content">
                <Filter />
                <Listing />
            </div>
        </main>
    );
}