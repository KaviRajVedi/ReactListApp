export interface ListItem {
  id: number;
  name: string;
  list_number: number;
}

export interface ApiResponse {
  lists: ListItem[];
}

export interface ListContainerProps {
  items: ListItem[];
  listNumber: number;
  isSelected: boolean;
  onToggleSelect: (listNumber: number) => void;
  onMoveItem?: (itemId: number, direction: 'left' | 'right') => void;
}