import { x } from '@xstyled/emotion';
import React, { useState } from 'react';

import ArrowRight from '@/assets/svgs/ArrowRight';
import Loading from '@/assets/svgs/Loading';

export default function Button({
  children,
  isLoading,
  ...props
}: {
  children: React.ReactNode;
  isLoading?: boolean;
} & Partial<typeof x.button['defaultProps']>) {
  const [scale, setScale] = useState(1);

  return (
    <x.button
      w="100%"
      backgroundColor="#4338CA"
      disabled={isLoading}
      transform={`scale(${scale})`}
      {...props}
      onMouseUp={() => {
        setTimeout(() => {
          setScale(1);
        }, 150);
      }}
      onMouseDown={() => {
        setScale(0.98);
      }}
      onTouchEnd={() => {
        setTimeout(() => {
          setScale(1);
        }, 150);
      }}
      onTouchStart={() => {
        setScale(0.98);
      }}
    >
      <x.div
        opacity={props?.disabled ? 0.3 : 1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {children}
        {isLoading ? (
          <x.div animation="rotate 1s linear infinite">
            <Loading />
          </x.div>
        ) : (
          <ArrowRight />
        )}
      </x.div>
    </x.button>
  );
}
