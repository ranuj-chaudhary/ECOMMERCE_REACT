import { useEffect } from "react";
import { throttle } from "../utils/utils";

/**
 * Hook to detect screen width changes and call a callback when it crosses a breakpoint.
 * @param {function} onChange - Function to call with `isDesktop: boolean`
 * @param {number} breakpoint - Breakpoint in pixels (default: 640)
 * @param {number} throttleDelay - Throttle delay in ms (default: 300)
 */
export function useResponsiveSidebarEffect(onChange, breakpoint = 640, throttleDelay = 300) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const isDesktop = window.innerWidth >= breakpoint;
      onChange(isDesktop);
    };

    const throttledHandler = throttle(handleResize, throttleDelay);

    window.addEventListener("resize", throttledHandler);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener("resize", throttledHandler);
    };
  }, [onChange, breakpoint, throttleDelay]);
}
