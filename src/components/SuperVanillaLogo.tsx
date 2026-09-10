import React from 'react';

interface SuperVanillaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBackground?: boolean;
}

export const SuperVanillaLogo: React.FC<SuperVanillaLogoProps> = ({
  className = '',
  size = 'md',
  showBackground = true,
}) => {
  const sizeMap = {
    sm: 'w-24 h-auto',
    md: 'w-40 h-auto',
    lg: 'w-64 h-auto',
    xl: 'w-80 h-auto',
  };

  return (
    <div
      className={`inline-flex flex-col items-center justify-center select-none ${
        showBackground ? 'bg-[#FBE88B] rounded-2xl p-4 shadow-sm border border-amber-200/50' : ''
      } ${sizeMap[size]} ${className}`}
    >
      <svg
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[220px]"
      >
        <g id="vanilla-flower-and-beans">
          {/* Vanilla flower petals (Pale cream with soft edges) */}
          <path
            d="M170 120 C150 70 160 30 185 20 C200 45 195 90 180 120 Z"
            fill="#FFFCE6"
            stroke="#1C3829"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M150 135 C110 110 80 115 70 135 C90 155 130 155 155 145 Z"
            fill="#FFFCE6"
            stroke="#1C3829"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M165 155 C135 185 130 220 145 235 C170 215 180 175 175 155 Z"
            fill="#FFFCE6"
            stroke="#1C3829"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M195 150 C215 180 235 200 255 190 C250 165 220 150 195 150 Z"
            fill="#FFFCE6"
            stroke="#1C3829"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M190 125 C215 95 245 90 250 110 C235 130 205 135 190 125 Z"
            fill="#FFFCE6"
            stroke="#1C3829"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Flower Golden Ruffled Center (Lip/Trumpet) */}
          <path
            d="M170 130 C165 115 190 110 195 125 C202 140 190 155 178 152 C168 150 165 140 170 130 Z"
            fill="#F6D14B"
            stroke="#1C3829"
            strokeWidth="3"
          />
          <path
            d="M178 132 C175 126 186 122 189 128 C192 135 185 142 180 140 Z"
            fill="#E0A724"
          />

          {/* Stem top */}
          <path
            d="M210 25 C215 20 225 22 226 35 L220 65 L205 60 Z"
            fill="#4F8535"
            stroke="#1C3829"
            strokeWidth="3.5"
          />

          {/* Bundle of Green Vanilla Pods */}
          {/* Pod 1 - leftmost */}
          <path
            d="M208 60 C180 100 150 160 160 215 C163 230 175 235 182 225 C185 190 195 130 215 65 Z"
            fill="#4F8535"
            stroke="#1C3829"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M170 110 C165 160 170 200 174 218"
            stroke="#2F5B1E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Pod 2 */}
          <path
            d="M214 62 C195 105 170 165 178 228 C182 242 195 240 200 230 C206 185 210 130 222 68 Z"
            fill="#3B7128"
            stroke="#1C3829"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M185 125 C182 170 186 210 190 230"
            stroke="#639E3E"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Pod 3 - Center long */}
          <path
            d="M220 65 C210 120 200 185 205 240 C207 248 215 250 220 242 C228 190 230 135 228 68 Z"
            fill="#4F8535"
            stroke="#1C3829"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M212 110 C210 160 211 205 214 235"
            stroke="#7CB550"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Pod 4 */}
          <path
            d="M224 66 C225 125 228 175 224 235 C225 245 233 246 238 238 C244 190 242 135 232 68 Z"
            fill="#386822"
            stroke="#1C3829"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Pod 5 - rightmost */}
          <path
            d="M228 68 C238 115 250 170 242 225 C240 238 248 240 252 232 C258 185 252 130 234 69 Z"
            fill="#4F8535"
            stroke="#1C3829"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Pod 6 - back curve */}
          <path
            d="M232 70 C246 110 256 160 250 210 C252 222 258 220 262 212 C265 170 256 120 236 71 Z"
            fill="#3B7128"
            stroke="#1C3829"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </g>

        {/* Distinctive Pixel / Bitmap Serif typography: 'Super Vanilla' */}
        <text
          x="200"
          y="295"
          textAnchor="middle"
          fill="#1C3829"
          fontFamily="'Courier New', 'VT323', monospace, serif"
          fontSize="46"
          fontWeight="900"
          letterSpacing="1.5"
          style={{
            fontVariantCaps: 'normal',
            textRendering: 'geometricPrecision',
          }}
        >
          Super Vanilla
        </text>
      </svg>
    </div>
  );
};

export default SuperVanillaLogo;
