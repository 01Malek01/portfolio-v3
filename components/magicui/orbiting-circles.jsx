import { cn } from "@/lib/utils";

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true
}) {
  return (<>
    {path && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="tw-pointer-events-none tw-absolute tw-inset-0 tw-size-full">
        <circle
          className="tw-stroke-black/10 tw-stroke-1 dark:tw-stroke-white/10"
          cx="50%"
          cy="50%"
          r={radius}
          fill="none" />
      </svg>
    )}
    <div
      style={
        {
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay
        }
      }
      className={cn(
        "tw-absolute tw-flex tw-size-full tw-transform-gpu tw-animate-orbit tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-zinc-200 tw-bg-black/10 [animation-delay:tw-calc(var(--delay)*1000ms)] dark:tw-bg-white/10 dark:tw-border-zinc-800",
        { "[animation-direction:reverse]": reverse },
        className
      )}>
      {children}
    </div>
  </>);
}
