import CardStyles from "../Styles/Card.module.css";
console.log(CardStyles);
const Card = ({ producto }) => {
  const { imagen, nombre, precio } = producto;
  return (
    <li className={CardStyles.cardContainer}>
      <h2>{nombre}</h2>
      <img src={imagen} alt="" className={CardStyles.cardImg} />
      <h3>{precio}</h3>
    </li>
  );
};

export default Card;
