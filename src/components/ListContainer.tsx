import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ListContainerProps } from '../types';

export const ListContainer = ({
  items,
  listNumber,
  isSelected,
  onToggleSelect,
  onMoveItem,
}: ListContainerProps) => {
  return (
    <div className={`bg-white rounded-lg p-4 shadow-md ${isSelected ? 'border-2 border-blue-500' : ''}`}>
      <div className="flex items-center justify-between mb-4 pb-2 border-b">
        <h2 className="text-xl font-bold text-gray-800">List {listNumber}</h2>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(listNumber)}
          className="w-5 h-5 accent-blue-500"
        />
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
          >
            <span className="text-gray-700">{item.name}</span>
            {onMoveItem && (
              <div className="flex gap-3">
                <button
                  onClick={() => onMoveItem(item.id, 'left')}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onMoveItem(item.id, 'right')}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};