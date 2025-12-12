import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = () => (story: () => Story) => (
  <Suspense fallback={<div>Loading</div>}>{story()}</Suspense>
);
