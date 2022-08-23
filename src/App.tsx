import { x } from '@xstyled/emotion';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Logo from '@/assets/svgs/Logo';
import Container from '@/components/molecules/Container';
import Input from '@/components/molecules/Input';

function App() {
  const { register, handleSubmit, setFocus } = useForm<{
    name: string;
    phoneNumber: string;
  }>();

  useEffect(() => {
    setTimeout(() => {
      setFocus('name');
    }, 3000);
  }, []);

  function onSumbit(e: any) {
    console.log(e);
  }

  return (
    <>
      <x.div
        opacity={0}
        animation="rotate3D 1.25s 0.25s forwards"
        w="100%"
        marginTop="60px"
        justifyContent="center"
        display="flex"
      >
        <Logo />
      </x.div>
      <x.div
        fontSize="1.5rem"
        fontWeight={600}
        textAlign="center"
        marginTop="12px"
        opacity={0}
        animation="slideIn 1.5s 0.75s forwards"
      >
        안녕하세요!
        <br />
        이용하시겠어요?
      </x.div>
      <x.div
        marginTop="8px"
        fontSize="0.9rem"
        textAlign="center"
        color="#D4D4D8"
        opacity={0}
        animation="slideIn 1s 1.75s forwards"
      >
        먼저 로그인해주세요.
      </x.div>
      <Container marginTop="32px">
        <form onSubmit={handleSubmit(onSumbit)}>
          <x.div opacity={0} animation="slideIn 1s 2.5s forwards">
            <Input
              register={register('name')}
              label="이름"
              placeholder="이름을 입력하세요"
              marginBottom="24px"
            />
          </x.div>
          <x.div opacity={0} animation="">
            <Input
              register={register('phoneNumber')}
              type="number"
              label="전화번호"
              placeholder="숫자만 입력받습니다"
            />
          </x.div>
          <button>ㅌㄴ</button>
        </form>
      </Container>
    </>
  );
}

export default App;
