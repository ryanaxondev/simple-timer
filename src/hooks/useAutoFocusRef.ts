import { useEffect, useRef } from "react";

interface AutoFocusOptions {
  active: boolean;
}

export function useAutoFocusRef<T extends HTMLElement>({ active }: AutoFocusOptions) {
  const elementRef = useRef<T | null>(null);

  // Focus on mount + whenever active becomes true
  useEffect(() => {
    if (active && elementRef.current) {
      elementRef.current.focus();
    }
  }, [active]);

  return elementRef;
}
