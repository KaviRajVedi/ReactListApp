import { useState } from 'react';
import { ListItem } from '../types';
import { ListContainer } from './ListContainer';

interface ListCreationViewProps {
  lists: ListItem[];
  selectedLists: number[];
  onCancel: () => void;
  onUpdate: (updatedLists: ListItem[]) => void;
}

export const ListCreationView = ({
  lists,
  selectedLists,
  onCancel,
  onUpdate,
}: ListCreationViewProps) => {
  const [firstList, secondList] = selectedLists;
  const [workingLists, setWorkingLists] = useState<ListItem[]>(() => {
    const newListNumber = Math.max(...lists.map(l => l.list_number)) + 1;
    return lists.map(item => ({
      ...item,
      list_number: item.list_number === secondList ? newListNumber : item.list_number
    }));
  });

  const getListItems = (listNumber: number) =>
    workingLists.filter(item => item.list_number === listNumber);

  const moveItem = (itemId: number, fromList: number, toList: number) => {
    setWorkingLists(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, list_number: toList } : item
      )
    );
  };

  const newListNumber = Math.max(...lists.map(l => l.list_number)) + 1;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Create New List</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ListContainer
          items={getListItems(firstList)}
          listNumber={firstList}
          isSelected={false}
          onToggleSelect={() => {}}
          onMoveItem={(itemId, direction) =>
            direction === 'right' && moveItem(itemId, firstList, newListNumber)
          }
        />
        <ListContainer
          items={getListItems(newListNumber)}
          listNumber={newListNumber}
          isSelected={false}
          onToggleSelect={() => {}}
          onMoveItem={(itemId, direction) => {
            if (direction === 'left') {
              moveItem(itemId, newListNumber, firstList);
            } else {
              moveItem(itemId, newListNumber, secondList);
            }
          }}
        />
        <ListContainer
          items={getListItems(secondList)}
          listNumber={secondList}
          isSelected={false}
          onToggleSelect={() => {}}
          onMoveItem={(itemId, direction) =>
            direction === 'left' && moveItem(itemId, secondList, newListNumber)
          }
        />
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={onCancel}
          className="px-8 py-2 bg-transparent border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 font-semibold"
        >
          Cancel
        </button>
        <button
          onClick={() => onUpdate(workingLists)}
          className="px-8 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-semibold"
        >
          Update
        </button>
      </div>
    </div>
  );
};