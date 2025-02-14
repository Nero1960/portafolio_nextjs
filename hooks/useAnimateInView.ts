"use client";
import { useInView } from "react-intersection-observer";

export function useAnimatedInView(threshold = 0.1) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold, // Se activa cuando el threshold% del elemento está visible
  });

  return { ref, inView };
}