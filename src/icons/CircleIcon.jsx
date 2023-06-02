import * as React from 'react';

export default function CircleIcon({ children, ...props }) {
  return (
    <svg
      width={90}
      height={89}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_dii_12195_8)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45 71.111c17.182 0 31.111-13.929 31.111-31.111C76.111 22.818 62.182 8.889 45 8.889 27.818 8.889 13.889 22.818 13.889 40c0 17.182 13.929 31.111 31.111 31.111zM45 80c22.091 0 40-17.909 40-40S67.091 0 45 0 5 17.909 5 40s17.909 40 40 40z"
          fill="#EBD8FF"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_dii_12195_8"
          x={0.608}
          y={-2.196}
          width={88.783}
          height={90.979}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4.392} />
          <feGaussianBlur stdDeviation={2.196} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_12195_8"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_12195_8"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4.392} />
          <feGaussianBlur stdDeviation={1.647} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.985684 0 0 0 0 0.972083 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="shape" result="effect2_innerShadow_12195_8" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={-2.196} />
          <feGaussianBlur stdDeviation={2.196} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.680944 0 0 0 0 0.480757 0 0 0 0 0.891667 0 0 0 1 0" />
          <feBlend
            in2="effect2_innerShadow_12195_8"
            result="effect3_innerShadow_12195_8"
          />
        </filter>
      </defs>
    </svg>
  );
}
