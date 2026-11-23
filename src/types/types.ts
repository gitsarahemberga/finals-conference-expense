export interface Venue {
  id: string;
  name: string;
  capacity: number;
  price: number;
  image: string;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface Meal {
  id: string;
  name: string;
  pricePerPerson: number;
}

export interface PlannerState {
  selectedVenues: Record<string, number>;
  selectedAddOns: Record<string, number>;
  selectedMeals: Record<string, boolean>;
  peopleCount: number;
  venues: Venue[];
  addOns: AddOn[];
  meals: Meal[];
}
