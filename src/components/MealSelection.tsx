import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { toggleMeal, setPeopleCount, setMeals } from '../features/plannerSlice';
import { meals } from '../data/data';

export default function MealSelection() {
  const { selectedMeals, peopleCount } = useSelector((state: RootState) => state.planner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMeals(meals));
  }, [dispatch]);

  const total = meals.reduce((sum, meal) => {
    if (selectedMeals[meal.id]) {
      return sum + meal.pricePerPerson * peopleCount;
    }
    return sum;
  }, 0);

  return (
    <section className="section">
      <h2 className="section-title">Meals Selection</h2>
      
      <div className="people-input">
        <label>Number of People:</label>
        <input
          type="number"
          min="1"
          value={peopleCount}
          onChange={(e) => dispatch(setPeopleCount(Number(e.target.value) || 1))}
        />
      </div>

      <div className="meals-list">
        {meals.map((meal) => (
          <label key={meal.id} className="meal-item">
            <input
              type="checkbox"
              checked={selectedMeals[meal.id] || false}
              onChange={() => dispatch(toggleMeal(meal.id))}
            />
            <span className="meal-name">{meal.name}</span>
            <span className="meal-price">${meal.pricePerPerson} per person</span>
          </label>
        ))}
      </div>

      <div className="total-row">
        <strong>Total Cost: ${total}</strong>
      </div>
    </section>
  );
}

