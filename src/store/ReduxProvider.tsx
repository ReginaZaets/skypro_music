"use client";

import { useRef } from "react";
import { AppStore, setupStore } from "./store";
import { Provider } from "react-redux";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = setupStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
