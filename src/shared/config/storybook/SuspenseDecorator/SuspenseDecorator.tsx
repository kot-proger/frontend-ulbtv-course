import { Suspense } from 'react';

export const SuspenseDecorator = () => (story: () => {}) => {
  return <Suspense fallback={<div>Loading</div>}>{story()}</Suspense>;
};
