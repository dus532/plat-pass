import { x } from '@xstyled/emotion';
import { useForm } from 'react-hook-form';
import { Platuser } from 'thin-backend';

import useUserQuery from '@/api/hooks/users';
import Button from '@/components/molecules/Button';
import Container from '@/components/molecules/Container';
import Input from '@/components/molecules/Input';

export default function LoginForm() {
  const { useSubmitGetUser } = useUserQuery();

  const { fetch: submitGetUser } = useSubmitGetUser();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { dirtyFields, isValid },
  } = useForm<Platuser>({ mode: 'onChange' });

  return (
    <form onSubmit={handleSubmit(submitGetUser)}>
      <Container marginTop="32px">
        <x.div opacity={0} animation="slideIn 1s 2.5s forwards">
          <Input
            register={register('name', { required: true, minLength: 2 })}
            label="이름"
            placeholder="이름을 입력하세요"
            marginBottom="24px"
            onBlur={() => {
              setFocus('phoneNumber');
            }}
          />
        </x.div>
        <x.div
          opacity={0}
          animation={dirtyFields?.name ? 'slideIn 1s forwards' : ''}
        >
          <Input
            register={register('phoneNumber', { required: true, minLength: 7 })}
            type="number"
            label="전화번호"
            placeholder="숫자만 입력받습니다"
          />
        </x.div>
      </Container>
      <Container
        opacity={0}
        animation={dirtyFields?.phoneNumber ? 'slideIn 1s forwards' : ''}
        position="absolute"
        top="calc(var(--vh) - 120px)"
      >
        <Button disabled={!isValid}>로그인하여 시작하기</Button>
      </Container>
    </form>
  );
}
