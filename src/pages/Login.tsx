import { x } from '@xstyled/emotion';

import Logo from '@/assets/svgs/Logo';
import LoginForm from '@/components/organisms/Login/LoginForm';

function Login() {
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
      <LoginForm />
    </>
  );
}

export default Login;
