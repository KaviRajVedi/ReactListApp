import { AlertCircle } from 'lucide-react';

interface FailureViewProps {
  onRetry: () => void;
}

export const FailureView = ({ onRetry }: FailureViewProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Oops! Something went wrong
      </h2>
      <p className="text-gray-600 mb-6 text-lg">
        We couldn't fetch the lists. Please try again.
      </p>
      <button
        onClick={onRetry}
        className="px-8 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-semibold"
      >
        Try Again
      </button>
    </div>
  );
};