import { x } from '@xstyled/emotion';

import Logo from '@/assets/svgs/Logo';

function App() {
  return (
    <>
      <x.div w="100%" marginTop="28px" justifyContent="center" display="flex">
        <Logo />
      </x.div>
      <x.div
        fontSize="1.5rem"
        fontWeight={600}
        textAlign="center"
        marginTop="12px"
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
      >
        먼저 로그인해주세요.
      </x.div>
    </>
  );
}

export default App;
