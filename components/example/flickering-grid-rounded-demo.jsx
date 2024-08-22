import FlickeringGrid from "@/components/magicui/flickering-grid";

export default function FlickeringGridRoundedDemo() {
  return (
    (<div
      className="tw-relative tw-size-[600px] tw-rounded-lg tw-w-full tw-bg-white tw-overflow-hidden tw-border dark:tw-bg-zinc-950">
      <FlickeringGrid
        className="tw-z-0 tw-absolute tw-inset-0 [mask:tw-radial-gradient(circle_at_center,#fff_300px,transparent_0)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={800} />
    </div>)
  );
}
