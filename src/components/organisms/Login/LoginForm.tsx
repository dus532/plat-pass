import { x } from '@xstyled/emotion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/molecules/Button';
import Container from '@/components/molecules/Container';
import Input from '@/components/molecules/Input';

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { dirtyFields },
  } = useForm<{
    name: string;
    phoneNumber: string;
  }>();

  function onSumbit(e: any) {
    setLoading(true);
    console.log(e);
  }

  return (
    <form onSubmit={handleSubmit(onSumbit)}>
      <Container marginTop="32px">
        <x.div opacity={0} animation="slideIn 1s 2.5s forwards">
          <Input
            register={register('name')}
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
            register={register('phoneNumber')}
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
        <Button isLoading={loading}>로그인하여 시작하기</Button>
      </Container>
    </form>
  );
}
