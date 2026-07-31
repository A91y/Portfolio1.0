import { IconBaseProps } from "react-icons";

// Inlined from public/icons/solana.svg so the mark inherits `currentColor`
// and tracks the theme the same way the react-icons skill icons do.
//
// The source file declares viewBox="0 0 44 44", but its path geometry only
// occupies roughly x 2.1-14.2 / y 2.9-12.3, so that viewBox would render the
// mark as a small glyph pinned to the top-left corner. The viewBox below is
// the source geometry's bounding box padded to a square, which centers the
// mark and sizes it to match the other icons. Path data is unchanged.
export default function SolanaIcon(props: IconBaseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="1.95 1.4 12.5 12.5"
      fill="currentColor"
      height="1em"
      width="1em"
      role="img"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2.45 6.76h9.59c.12 0 .23.05.32.14l1.52 1.56c.28.29.08.78-.32.78H3.97c-.12 0-.23-.05-.32-.14L2.13 7.54c-.28-.29-.08-.78.32-.78m-.32-2.07l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78l-1.51 1.56c-.08.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78m11.74 6.61l-1.52 1.56c-.09.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78"
      />
    </svg>
  );
}
