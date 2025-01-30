import { Loader2 } from 'lucide-react';

export const LoadingView = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
      <p className="mt-4 text-lg text-gray-700 font-medium">Loading lists...</p>
    </div>
  );
};