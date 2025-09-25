import "./Card.css";
import comics from "./comics";

const Card = () => {
    return (
        <section className="series">
            <div className="container">
                <h3 className="series-title">CURRENT SERIES</h3>

                <ul className="series-grid">
                    {comics.map((c) => (
                        <li key={c.id} className="series-card" title={c.title}>
                            <div className="cover">
                                <img src={c.thumb} alt={c.title} loading="lazy" />
                            </div>
                            <p className="series-name">{c.series}</p>
                        </li>
                    ))}
                </ul>

                <div className="loadmore-wrap">
                    <button className="btn-loadmore">LOAD MORE</button>
                </div>
            </div>
        </section>
    );
};

export default Card;
