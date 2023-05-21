import {useState} from 'react';

export const useRefetch = (refetch?: () => void) => {
  const [isRefetching, setIsRefetching] = useState(false);

  const refetchFunction = async () => {
    setIsRefetching(false);
    try {
      refetch && (await refetch());
    } finally {
      setIsRefetching(false);
    }
  };

  return {isRefetching, refetchFunction};
};
