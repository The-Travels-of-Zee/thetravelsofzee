import { useEffect, useRef } from 'react';

export const useSwipeable = ({
  onSwipedLeft,
  onSwipedRight,
  preventScrollOnSwipe = false,
  trackMouse = false,
  delta = 50
} = {}) => {
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const isSwiping = useRef(false);
  const elementRef = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches ? e.touches[0] : e;
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    isSwiping.current = false;
  };

  const handleTouchMove = (e) => {
    if (!touchStartX.current || !touchStartY.current) return;

    const touch = e.touches ? e.touches[0] : e;
    const deltaX = Math.abs(touch.clientX - touchStartX.current);
    const deltaY = Math.abs(touch.clientY - touchStartY.current);

    // If horizontal movement is greater than vertical, consider it a swipe
    if (deltaX > deltaY && deltaX > 10) {
      isSwiping.current = true;
      if (preventScrollOnSwipe) {
        e.preventDefault();
      }
    }
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current || !isSwiping.current) {
      touchStartX.current = null;
      touchStartY.current = null;
      return;
    }

    const touch = e.changedTouches ? e.changedTouches[0] : e;
    const deltaX = touch.clientX - touchStartX.current;

    if (Math.abs(deltaX) > delta) {
      if (deltaX > 0) {
        onSwipedRight?.();
      } else {
        onSwipedLeft?.();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    isSwiping.current = false;
  };

  const handlers = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    ref: elementRef
  };

  if (trackMouse) {
    handlers.onMouseDown = handleTouchStart;
    handlers.onMouseMove = handleTouchMove;
    handlers.onMouseUp = handleTouchEnd;
    handlers.onMouseLeave = handleTouchEnd;
  }

  return handlers;
};