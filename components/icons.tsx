import type { ReactNode } from "react";

type IconProps = { size?: number; className?: string };

function Icon({ size = 16, className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Icon {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Icon>
);
export const ArrowLeft = (p: IconProps) => (
  <Icon {...p}><path d="M19 12H5" /><path d="m11 6-6 6 6 6" /></Icon>
);
export const ArrowUp = (p: IconProps) => (
  <Icon {...p}><path d="M12 19V5" /><path d="m6 11 6-6 6 6" /></Icon>
);
export const ArrowUpRight = (p: IconProps) => (
  <Icon {...p}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></Icon>
);
export const Play = (p: IconProps) => (
  <Icon {...p}><path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" /></Icon>
);
export const Phone = (p: IconProps) => (
  <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></Icon>
);
export const Mail = (p: IconProps) => (
  <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>
);
export const MapPin = (p: IconProps) => (
  <Icon {...p}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></Icon>
);
export const Clock = (p: IconProps) => (
  <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Icon>
);
