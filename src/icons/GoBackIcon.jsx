export default function GoBackIcon(props) {
  return (
    <svg
      width={35}
      height={35}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M33 19h1v-2h-1v2zM2 18l-.678-.735-.832.768.864.73L2 18zM15.678 6.735l.735-.678-1.357-1.47-.734.678 1.356 1.47zm-1.324 23.028l.763.646 1.292-1.526-.763-.646-1.292 1.526zM3 19h30v-2H3v2zm-.322-.265l13-12-1.356-1.47-13 12 1.356 1.47zm-1.324.028l13 11 1.292-1.526-13-11-1.292 1.526z"
        fill={props.color || '#373737'}
      />
    </svg>
  );
}
