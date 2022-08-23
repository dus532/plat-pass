import { x } from '@xstyled/emotion';
import { UseFormRegisterReturn } from 'react-hook-form';

export default function Input({
  label,
  register,
  ...props
}: {
  label?: string;
  register?: UseFormRegisterReturn<string>;
} & Partial<typeof x.input['defaultProps']>) {
  return (
    <x.label>
      <x.div
        fontSize="0.8rem"
        marginBottom="8px"
        marginLeft="4px"
        color="#d4d4d8"
      >
        {label}
      </x.div>
      <x.input w="100%" {...register} {...props} />
    </x.label>
  );
}
