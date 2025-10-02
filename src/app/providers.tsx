"use client";

import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { CartProvider } from "@/contexts/CartContext";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ErrorBoundary
      fallback={<div>Something went wrong. Try to refresh the page.</div>}
    >
      <CartProvider>{children}</CartProvider>
    </ErrorBoundary>
  );
}
