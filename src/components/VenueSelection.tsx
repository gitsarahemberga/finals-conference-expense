import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { incrementVenue, decrementVenue, setVenues } from '../features/plannerSlice';
import { venues } from '../data/data';

export default function VenueSelection() {
  const { selectedVenues } = useSelector((state: RootState) => state.planner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setVenues(venues));
  }, [dispatch]);

  return (
    <section className="section">
      <h2 className="section-title">Venue Room Selection</h2>
      <div className="grid-container">
        {venues.map((venue) => (
          <div key={venue.id} className="card">
            <img src={venue.image} alt={venue.name} />
            <h3>{venue.name}</h3>
            <p className="capacity">Capacity: {venue.capacity}</p>
            <p className="price">${venue.price} each</p>
            <div className="qty-controls">
              <button onClick={() => dispatch(decrementVenue(venue.id))}>−</button>
              <span>{selectedVenues[venue.id] || 0}</span>
              <button onClick={() => dispatch(incrementVenue(venue.id))}>+</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


