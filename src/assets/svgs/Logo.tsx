export default function Logo({ w = 40, h = 40 }: { w?: number; h?: number }) {
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30V10Z"
        fill="#4338CA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10.75C14.8914 10.75 10.75 14.8914 10.75 20C10.75 25.1086 14.8914 29.25 20 29.25C25.1086 29.25 29.25 25.1086 29.25 20C29.25 14.8914 25.1086 10.75 20 10.75ZM9.25 20C9.25 14.0629 14.0629 9.25 20 9.25C25.9371 9.25 30.75 14.0629 30.75 20C30.75 25.9371 25.9371 30.75 20 30.75C14.0629 30.75 9.25 25.9371 9.25 20Z"
        fill="white"
      />
      <path
        d="M24.24 15.76L22.12 22.12L15.76 24.24L17.88 17.88L24.24 15.76Z"
        fill="#C7D2FE"
      />
    </svg>
  );
}
