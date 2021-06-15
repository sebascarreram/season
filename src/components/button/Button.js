const Button = (props) => (
  <button className="btn__btn" onClick={props.onClick} id={props.id}>
    {props.text}
  </button>
);

export default Button;
