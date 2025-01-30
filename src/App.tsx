import React, { useEffect, useState } from 'react';
import { ListItem } from './types';
import { LoadingView } from './components/LoadingView';
import { FailureView } from './components/FailureView';
import { ListContainer } from './components/ListContainer';
import { ListCreationView } from './components/ListCreationView';

const API_URL = 'https://apis.ccbp.in/list-creation/lists';

function App() {
  const [lists, setLists] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedLists, setSelectedLists] = useState<number[]>([]);
  const [isCreatingList, setIsCreatingList] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchLists = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setLists(data.lists);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  const handleToggleSelect = (listNumber: number) => {
    setSelectedLists(prev => {
      const isSelected = prev.includes(listNumber);
      if (isSelected) {
        return prev.filter(num => num !== listNumber);
      }
      if (prev.length >= 2) {
        return prev;
      }
      return [...prev, listNumber];
    });
    setErrorMessage('');
  };

  const handleCreateList = () => {
    if (selectedLists.length !== 2) {
      setErrorMessage('You should select exactly 2 lists to create a new list');
      return;
    }
    setIsCreatingList(true);
  };

  const handleUpdateLists = (updatedLists: ListItem[]) => {
    setLists(updatedLists);
    setIsCreatingList(false);
    setSelectedLists([]);
  };

  if (loading) return <LoadingView />;
  if (error) return <FailureView onRetry={fetchLists} />;

  if (isCreatingList) {
    return (
      <ListCreationView
        lists={lists}
        selectedLists={selectedLists}
        onCancel={() => setIsCreatingList(false)}
        onUpdate={handleUpdateLists}
      />
    );
  }

  const uniqueListNumbers = [...new Set(lists.map(item => item.list_number))];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">List Creation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {uniqueListNumbers.map(listNumber => (
            <ListContainer
              key={listNumber}
              items={lists.filter(item => item.list_number === listNumber)}
              listNumber={listNumber}
              isSelected={selectedLists.includes(listNumber)}
              onToggleSelect={handleToggleSelect}
            />
          ))}
        </div>
        {errorMessage && (
          <p className="text-red-500 text-center mb-6 font-medium">{errorMessage}</p>
        )}
        <div className="flex justify-center">
          <button
            onClick={handleCreateList}
            className="px-8 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-semibold"
          >
            Create a new list
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;