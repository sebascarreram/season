const Card = (props) => (
  <div
    style={{ backgroundImage: `url(/img/${props.url}.jpeg)` }}
    className="card"
  >
    {props.children}
  </div>
);

export default Card;
