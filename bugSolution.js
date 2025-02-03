```javascript
// pages/index.js
import { Suspense, lazy } from 'react';

const DynamicComponent = lazy(() => import('./dynamic'));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent />
    </Suspense>
  );
}
```