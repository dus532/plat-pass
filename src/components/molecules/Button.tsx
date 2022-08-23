import { x } from '@xstyled/emotion';
import React from 'react';

export default function Button({
  children,
  ...props
}: {
  children: React.ReactNode;
} & Partial<typeof x.button['defaultProps']>) {
  return (
    <x.button w="100%" backgroundColor="#4338CA" {...props}>
      <x.div display="flex" justifyContent="space-between" alignItems="center">
        {children}
      </x.div>
    </x.button>
  );
}
