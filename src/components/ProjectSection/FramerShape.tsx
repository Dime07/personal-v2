const FramerShape = ({
  variant,
  className = "h-20 w-20 md:h-28 md:w-28",
}: {
  variant: number;
  className?: string;
}) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 256 256"
    className={className}
    fill="currentColor"
  >
    {variant % 5 === 0 && <path d="M136 108.686 212.853 31.833l11.313 11.315L147.313 120H256v16H147.314l76.853 76.853-11.314 11.314L136 147.313V256h-16v-108.313l-76.852 76.854-11.315-11.314L108.686 136H0v-16h108.687L31.834 43.148l11.314-11.315L120 108.686V0h16v108.686Z" />}
    {variant % 5 === 1 && <path fillRule="evenodd" d="M128 0a128 128 0 1 0 0 256 128 128 0 0 0 0-256Zm0 48a80 80 0 1 1 0 160 80 80 0 0 1 0-160Z" />}
    {variant % 5 === 2 && <path d="M128 0 256 128 128 256 0 128 128 0Zm0 54.6L54.6 128l73.4 73.4 73.4-73.4L128 54.6Z" fillRule="evenodd" />}
    {variant % 5 === 3 && <path d="M128 0 256 221.7H0L128 0Zm0 64L55.4 192h145.2L128 64Z" fillRule="evenodd" />}
    {variant % 5 === 4 && <path d="M0 0h112v112H0V0Zm144 0h112v112H144V0ZM0 144h112v112H0V144Zm144 0h112v112H144V144Z" />}
  </svg>
);

export default FramerShape;
