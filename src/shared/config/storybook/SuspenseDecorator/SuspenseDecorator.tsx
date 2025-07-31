import { Suspense } from 'react';

export const SuspenseDecorator = () => (story: () => {}) => <Suspense fallback={<div>Loading</div>}>{story()}</Suspense>;
