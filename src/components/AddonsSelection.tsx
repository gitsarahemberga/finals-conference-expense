import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { incrementAddOn, decrementAddOn, setAddOns } from '../features/plannerSlice';
import { addOns } from '../data/data';

export default function AddonsSelection() {
  const { selectedAddOns } = useSelector((state: RootState) => state.planner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAddOns(addOns));
  }, [dispatch]);

  return (
    <section className="section">
      <h2 className="section-title">Add-ons Selection</h2>
      <div className="grid-container">
        {addOns.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">${item.price} each</p>
            <div className="qty-controls">
              <button onClick={() => dispatch(decrementAddOn(item.id))}>−</button>
              <span>{selectedAddOns[item.id] || 0}</span>
              <button onClick={() => dispatch(incrementAddOn(item.id))}>+</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
