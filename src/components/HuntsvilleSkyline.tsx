export default function HuntsvilleSkyline() {
  return (
    <div
      className="huntsville-skyline pointer-events-none relative z-30 -mb-px overflow-hidden bg-slate-900"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Night sky gradient */}
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0" />
            <stop offset="60%" stopColor="#0f172a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        <rect width="1440" height="200" fill="url(#skyGrad)" />

        {/* ============================================ */}
        {/*  Stars                                       */}
        {/* ============================================ */}
        <circle cx="120" cy="30" r="1" fill="white" opacity="0.6" />
        <circle cx="340" cy="18" r="0.8" fill="white" opacity="0.4" />
        <circle cx="560" cy="42" r="1.2" fill="white" opacity="0.5" />
        <circle cx="780" cy="15" r="0.7" fill="white" opacity="0.3" />
        <circle cx="1000" cy="35" r="1" fill="white" opacity="0.5" />
        <circle cx="1200" cy="22" r="0.9" fill="white" opacity="0.4" />
        <circle cx="200" cy="55" r="0.6" fill="white" opacity="0.3" />
        <circle cx="900" cy="50" r="0.8" fill="white" opacity="0.35" />
        <circle cx="1350" cy="40" r="1.1" fill="white" opacity="0.45" />
        <circle cx="650" cy="25" r="0.5" fill="white" opacity="0.3" />
        <circle cx="70" cy="48" r="0.7" fill="white" opacity="0.35" />
        <circle cx="1420" cy="18" r="0.6" fill="white" opacity="0.3" />

        {/* Twinkling stars */}
        <circle cx="450" cy="28" r="1.2" fill="white" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="1100" cy="38" r="1" fill="white" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.15;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="280" cy="40" r="0.9" fill="white" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3.5s" repeatCount="indefinite" />
        </circle>

        {/* ============================================ */}
        {/*  Distant rolling hills / tree line           */}
        {/* ============================================ */}
        <path
          d="M0 170 Q60 158 120 163 Q180 155 240 160 Q320 152 400 157 Q480 150 560 155 Q640 148 720 153 Q800 146 880 151 Q960 144 1040 149 Q1120 142 1200 147 Q1280 140 1360 145 L1440 142 L1440 200 L0 200Z"
          fill="#1e293b"
          opacity="0.6"
        />

        {/* ============================================ */}
        {/*  Downtown Huntsville — left cluster          */}
        {/* ============================================ */}
        {/* Tall office building */}
        <rect x="50" y="120" width="28" height="80" fill="#334155" />
        <rect x="54" y="126" width="4" height="5" fill="#fbbf24" opacity="0.15" />
        <rect x="62" y="126" width="4" height="5" fill="#fbbf24" opacity="0.1" />
        <rect x="70" y="126" width="4" height="5" fill="#fbbf24" opacity="0.12" />
        <rect x="54" y="137" width="4" height="5" fill="#fbbf24" opacity="0.08" />
        <rect x="62" y="137" width="4" height="5" fill="#fbbf24" opacity="0.15" />
        <rect x="54" y="148" width="4" height="5" fill="#fbbf24" opacity="0.1" />
        <rect x="70" y="148" width="4" height="5" fill="#fbbf24" opacity="0.12" />

        {/* Medium building */}
        <rect x="88" y="140" width="22" height="60" fill="#3b4a5e" />
        <rect x="92" y="146" width="3" height="4" fill="#fbbf24" opacity="0.12" />
        <rect x="100" y="146" width="3" height="4" fill="#fbbf24" opacity="0.1" />
        <rect x="92" y="156" width="3" height="4" fill="#fbbf24" opacity="0.08" />

        {/* Wider short building */}
        <rect x="118" y="148" width="35" height="52" fill="#2d3a4a" />
        <rect x="124" y="154" width="4" height="5" fill="#fbbf24" opacity="0.1" />
        <rect x="133" y="154" width="4" height="5" fill="#fbbf24" opacity="0.13" />
        <rect x="142" y="154" width="4" height="5" fill="#fbbf24" opacity="0.08" />

        {/* Small building */}
        <rect x="162" y="158" width="18" height="42" fill="#334155" />

        {/* ============================================ */}
        {/*  Saturn V — grounded on launch pad           */}
        {/* ============================================ */}
        <g transform="translate(260, 62)">
          {/* Launch pad base */}
          <rect x="-16" y="128" width="32" height="4" rx="1" fill="#475569" />
          <rect x="-12" y="126" width="24" height="3" rx="0.5" fill="#334155" />

          {/* LES tower */}
          <line x1="0" y1="-8" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="0" cy="-8" r="1.2" fill="#94a3b8" />

          {/* Command module nose cone */}
          <path d="M0 0 L-4 13 L4 13 Z" fill="#64748b" />

          {/* Service module */}
          <rect x="-4" y="13" width="8" height="11" fill="#475569" />

          {/* Spacecraft adapter */}
          <path d="M-4 24 L-6 30 L6 30 L4 24 Z" fill="#334155" />

          {/* S-IVB — third stage */}
          <rect x="-6" y="30" width="12" height="20" fill="#475569" />
          <rect x="-6" y="33" width="12" height="1.5" fill="#0f172a" opacity="0.4" />
          <rect x="-6" y="42" width="12" height="1.5" fill="#0f172a" opacity="0.4" />

          {/* S-IVB / S-II interstage ring */}
          <path d="M-6 50 L-8 55 L8 55 L6 50 Z" fill="#1e293b" />

          {/* S-II — second stage */}
          <rect x="-8" y="55" width="16" height="26" fill="#64748b" />
          <text x="0" y="69" textAnchor="middle" fontSize="4" fontWeight="bold" fill="white" fontFamily="Arial" opacity="0.55">USA</text>
          <rect x="-8" y="75" width="16" height="1.5" fill="#0f172a" opacity="0.3" />

          {/* S-II / S-IC interstage ring */}
          <path d="M-8 81 L-9 86 L9 86 L8 81 Z" fill="#1e293b" />

          {/* S-IC — first stage */}
          <rect x="-9" y="86" width="18" height="36" fill="#475569" />
          <rect x="-9" y="89" width="18" height="2" fill="#0f172a" opacity="0.25" />
          <rect x="-9" y="101" width="18" height="2" fill="#0f172a" opacity="0.25" />
          <rect x="-9" y="113" width="18" height="2" fill="#0f172a" opacity="0.25" />

          {/* Four swept fins */}
          <path d="M-9 112 L-18 124 L-9 121 Z" fill="#334155" />
          <path d="M9 112 L18 124 L9 121 Z" fill="#334155" />
          <path d="M-5 114 L-13 124 L-5 121 Z" fill="#3b4a5e" opacity="0.7" />
          <path d="M5 114 L13 124 L5 121 Z" fill="#3b4a5e" opacity="0.7" />

          {/* Engine cluster fairing */}
          <rect x="-9" y="122" width="18" height="3" rx="1" fill="#1e293b" />

          {/* Five F-1 engine nozzles */}
          <ellipse cx="-6.5" cy="126" rx="2.5" ry="2" fill="#0f172a" />
          <ellipse cx="-2.5" cy="127" rx="2" ry="1.8" fill="#0f172a" />
          <ellipse cx="2.5" cy="127" rx="2" ry="1.8" fill="#0f172a" />
          <ellipse cx="6.5" cy="126" rx="2.5" ry="2" fill="#0f172a" />
          <ellipse cx="0" cy="128" rx="2.5" ry="2.2" fill="#0f172a" />
        </g>

        {/* ============================================ */}
        {/*  Space & Rocket Center dome                  */}
        {/* ============================================ */}
        <g transform="translate(460, 100)">
          {/* Main building body */}
          <rect x="0" y="40" width="80" height="60" fill="#334155" />
          {/* Dome — smoother curve */}
          <path d="M5 40 Q15 15 40 8 Q65 15 75 40 Z" fill="#475569" />
          {/* Dome highlight */}
          <path d="M20 36 Q35 16 55 30" stroke="#64748b" strokeWidth="0.8" fill="none" opacity="0.4" />
          {/* Windows with warm glow */}
          <rect x="12" y="50" width="8" height="10" fill="#1e293b" opacity="0.6" />
          <rect x="12" y="51" width="8" height="3" fill="#fbbf24" opacity="0.08" />
          <rect x="27" y="50" width="8" height="10" fill="#1e293b" opacity="0.6" />
          <rect x="27" y="51" width="8" height="3" fill="#fbbf24" opacity="0.1" />
          <rect x="42" y="50" width="8" height="10" fill="#1e293b" opacity="0.6" />
          <rect x="57" y="50" width="8" height="10" fill="#1e293b" opacity="0.6" />
          <rect x="57" y="51" width="8" height="3" fill="#fbbf24" opacity="0.07" />
          {/* Entrance arch */}
          <path d="M32 100 Q40 82 48 100" fill="#1e293b" opacity="0.5" />
        </g>

        {/* ============================================ */}
        {/*  Mid-section buildings (filling the gap)     */}
        {/* ============================================ */}
        <rect x="580" y="145" width="20" height="55" fill="#334155" />
        <rect x="584" y="151" width="3" height="4" fill="#fbbf24" opacity="0.1" />
        <rect x="591" y="151" width="3" height="4" fill="#fbbf24" opacity="0.08" />

        <rect x="610" y="135" width="26" height="65" fill="#2d3a4a" />
        <rect x="615" y="141" width="4" height="5" fill="#fbbf24" opacity="0.12" />
        <rect x="624" y="141" width="4" height="5" fill="#fbbf24" opacity="0.08" />
        <rect x="615" y="152" width="4" height="5" fill="#fbbf24" opacity="0.06" />
        <rect x="624" y="152" width="4" height="5" fill="#fbbf24" opacity="0.1" />

        <rect x="645" y="150" width="18" height="50" fill="#3b4a5e" />
        <rect x="649" y="156" width="3" height="4" fill="#fbbf24" opacity="0.09" />

        <rect x="675" y="140" width="22" height="60" fill="#334155" />
        <rect x="680" y="146" width="4" height="5" fill="#fbbf24" opacity="0.11" />
        <rect x="688" y="146" width="4" height="5" fill="#fbbf24" opacity="0.07" />
        <rect x="680" y="157" width="4" height="5" fill="#fbbf24" opacity="0.13" />

        {/* Shorter connector buildings */}
        <rect x="706" y="158" width="16" height="42" fill="#2d3a4a" />
        <rect x="730" y="152" width="20" height="48" fill="#3b4a5e" />
        <rect x="734" y="158" width="3" height="4" fill="#fbbf24" opacity="0.08" />
        <rect x="741" y="158" width="3" height="4" fill="#fbbf24" opacity="0.1" />

        {/* ============================================ */}
        {/*  Right-side buildings                        */}
        {/* ============================================ */}
        <rect x="790" y="138" width="24" height="62" fill="#334155" />
        <rect x="795" y="144" width="4" height="5" fill="#fbbf24" opacity="0.1" />
        <rect x="804" y="144" width="4" height="5" fill="#fbbf24" opacity="0.07" />
        <rect x="795" y="155" width="4" height="5" fill="#fbbf24" opacity="0.12" />

        <rect x="822" y="148" width="20" height="52" fill="#3b4a5e" />
        <rect x="826" y="154" width="3" height="4" fill="#fbbf24" opacity="0.09" />

        <rect x="850" y="130" width="30" height="70" fill="#2d3a4a" />
        <rect x="856" y="136" width="4" height="5" fill="#fbbf24" opacity="0.1" />
        <rect x="865" y="136" width="4" height="5" fill="#fbbf24" opacity="0.13" />
        <rect x="856" y="148" width="4" height="5" fill="#fbbf24" opacity="0.07" />
        <rect x="865" y="148" width="4" height="5" fill="#fbbf24" opacity="0.11" />

        <rect x="890" y="150" width="18" height="50" fill="#334155" />

        {/* ============================================ */}
        {/*  Far-right buildings                         */}
        {/* ============================================ */}
        <rect x="960" y="145" width="22" height="55" fill="#3b4a5e" />
        <rect x="965" y="151" width="3" height="4" fill="#fbbf24" opacity="0.08" />
        <rect x="972" y="151" width="3" height="4" fill="#fbbf24" opacity="0.1" />

        <rect x="990" y="138" width="26" height="62" fill="#2d3a4a" />
        <rect x="995" y="144" width="4" height="5" fill="#fbbf24" opacity="0.11" />
        <rect x="1005" y="144" width="4" height="5" fill="#fbbf24" opacity="0.07" />

        <rect x="1025" y="152" width="18" height="48" fill="#334155" />

        <rect x="1060" y="140" width="24" height="60" fill="#3b4a5e" />
        <rect x="1065" y="146" width="4" height="5" fill="#fbbf24" opacity="0.09" />
        <rect x="1074" y="146" width="4" height="5" fill="#fbbf24" opacity="0.12" />

        <rect x="1100" y="155" width="16" height="45" fill="#2d3a4a" />

        <rect x="1140" y="142" width="28" height="58" fill="#334155" />
        <rect x="1146" y="148" width="4" height="5" fill="#fbbf24" opacity="0.1" />
        <rect x="1156" y="148" width="4" height="5" fill="#fbbf24" opacity="0.08" />
        <rect x="1146" y="160" width="4" height="5" fill="#fbbf24" opacity="0.12" />

        <rect x="1180" y="152" width="20" height="48" fill="#3b4a5e" />
        <rect x="1210" y="146" width="24" height="54" fill="#2d3a4a" />
        <rect x="1216" y="152" width="4" height="5" fill="#fbbf24" opacity="0.09" />

        <rect x="1250" y="155" width="18" height="45" fill="#334155" />
        <rect x="1280" y="148" width="22" height="52" fill="#3b4a5e" />

        {/* ============================================ */}
        {/*  Foreground tree silhouettes — extended      */}
        {/* ============================================ */}
        {/* Left trees */}
        <path
          d="M0 185 Q15 172 30 178 Q45 168 60 176 Q75 170 90 178 Q105 168 120 175 Q135 170 150 178 Q165 168 180 176 Q200 170 220 178 L220 200 L0 200Z"
          fill="#1e293b"
        />
        {/* Center-left trees */}
        <path
          d="M300 184 Q315 174 330 179 Q345 170 360 176 Q375 172 390 178 L390 200 L300 200Z"
          fill="#1e293b"
        />
        {/* Center-right trees */}
        <path
          d="M750 183 Q768 172 785 178 Q800 170 815 176 Q830 168 845 174 Q860 170 875 178 L875 200 L750 200Z"
          fill="#1e293b"
        />
        {/* Right trees */}
        <path
          d="M1150 182 Q1170 168 1190 175 Q1210 165 1230 172 Q1250 163 1270 170 Q1290 160 1310 168 Q1330 160 1350 170 Q1370 162 1390 172 Q1410 165 1430 174 L1440 172 L1440 200 L1150 200Z"
          fill="#1e293b"
        />
        {/* Far-left accent trees */}
        <path
          d="M0 192 Q10 185 20 188 Q30 182 40 186 L40 200 L0 200Z"
          fill="#162032"
        />

        {/* Ground line */}
        <rect x="0" y="195" width="1440" height="5" fill="#0f172a" />
      </svg>

      {/* Caption */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <p className="whitespace-nowrap rounded-full bg-slate-800/80 px-4 py-1 text-[10px] font-medium tracking-widest text-slate-500 uppercase backdrop-blur-sm">
          Huntsville, Alabama &bull; Rocket City USA
        </p>
      </div>
    </div>
  );
}
