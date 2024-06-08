import "./card.css";

const Card = ({ data }) => {
  return (
    <div className="card__container">
      <span className="card__id">{data.id}</span>
      <h3 className="card__title">{data.title}</h3>
      <div className="card__image">
        <img src={data.thumbnail} alt={data.title} />
      </div>
    </div>
  );
};

export default Card;
