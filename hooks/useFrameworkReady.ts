import { useEffect } from 'react';

export function useFrameworkReady() {
  useEffect(() => {
    console.log('Framework is ready!');
    // Add any framework initialization logic here if needed
  }, []);
}
