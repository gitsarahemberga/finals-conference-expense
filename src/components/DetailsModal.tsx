import { useSelector } from 'react-redux';
import type { RootState } from '../store';

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailsModal({ isOpen, onClose }: DetailsModalProps) {
  const { selectedVenues, selectedAddOns, selectedMeals, peopleCount, venues, addOns, meals } = 
    useSelector((state: RootState) => state.planner);

  if (!isOpen) return null;

  // Venues
  const venueItems = Object.entries(selectedVenues)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const item = venues.find((v: any) => v.id === id);
      return item ? { 
        name: `${item.name} (Capacity: ${item.capacity})`, 
        unitCost: `$${item.price}`, 
        quantity: qty, 
        total: `$${item.price * qty}` 
      } : null;
    })
    .filter(Boolean) as any[];

  // Add-ons
  const addOnItems = Object.entries(selectedAddOns)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const item = addOns.find((a: any) => a.id === id);
      return item ? { 
        name: item.name, 
        unitCost: `$${item.price}`, 
        quantity: qty, 
        total: `$${item.price * qty}` 
      } : null;
    })
    .filter(Boolean) as any[];

  // Meals
  const mealItems = Object.entries(selectedMeals)
    .filter(([_, selected]) => selected)
    .map(([id]) => {
      const item = meals.find((m: any) => m.id === id);
      return item ? { 
        name: item.name, 
        unitCost: `$${item.pricePerPerson}`, 
        quantity: `For ${peopleCount} people`, 
        total: `$${item.pricePerPerson * peopleCount}` 
      } : null;
    })
    .filter(Boolean) as any[];

  const allItems = [...venueItems, ...addOnItems, ...mealItems];
  
  const grandTotal = allItems.reduce((sum, item) => {
    const totalVal = parseInt(item.total.replace('$', ''));
    return sum + totalVal;
  }, 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <h2 className="modal-title">TOTAL COST FOR THE EVENT</h2>
        <div className="modal-grand-total">${grandTotal}</div>
        
        <table className="modal-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit Cost</th>
              <th>Quantity</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {allItems.length === 0 ? (
              <tr>
                <td colSpan={4} className="empty-cell">No items selected yet</td>
              </tr>
            ) : (
              allItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.unitCost}</td>
                  <td>{item.quantity}</td>
                  <td>{item.total}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

