'use client';

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { makeStore, type AppStore } from '@/store/store';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store] = useState<AppStore>(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
}
