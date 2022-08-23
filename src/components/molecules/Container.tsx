import { x } from '@xstyled/emotion';

export default function Container({
  children,
  ...props
}: { children: React.ReactNode } & Partial<typeof x.div['defaultProps']>) {
  return (
    <x.div w="100%" padding="0 24px" {...props}>
      {children}
    </x.div>
  );
}
