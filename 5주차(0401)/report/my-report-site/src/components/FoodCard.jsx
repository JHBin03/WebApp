function FoodCard(props) {
  return (
    <div className="food-card">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p><strong>가격:</strong> {props.price}원</p>
    </div>
  );
}

export default FoodCard;