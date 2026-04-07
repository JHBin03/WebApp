import FoodCard from './FoodCard';

function FoodList() {
  return (
    <section className="food-list">
      <h2>추천 음식</h2>

      <FoodCard
        name="김치찌개"
        description="한국 전통 매운 찌개"
        price="8000"
      />

      <FoodCard
        name="비빔밥"
        description="다양한 나물과 밥을 비벼먹는 음식"
        price="9000"
      />

      <FoodCard
        name="라면"
        description="간단하고 빠르게 먹을 수 있는 음식"
        price="4000"
      />
    </section>
  );
}

export default FoodList;