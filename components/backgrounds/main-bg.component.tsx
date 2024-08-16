import { cn } from "@/lib/utils";
import { MainBgInputInterface } from "@/Models/Interfaces/main-bg.interface";

export default function MainBg({
	children,
	className,
	...props
}: MainBgInputInterface) {
	const showRadialGradient = true;
	return (
		<div
			className={cn(
				"relative flex flex-col  h-[100vh] items-center justify-center bg-main-bg bg-cover transition-bg",
				className,
			)}
			{...props}
		>
			{children}
			<div className="absolute inset-0 overflow-hidden -z-0">
				<div
					//   I'm sorry but this is what peak developer performance looks like // trigger warning
					className={cn(
						`
						hidden md:block
            [--white-gradient:repeating-linear-gradient(100deg,var(--slate-900)_0%,var(--slate-900)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--slate-900)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--primary)_0%,var(--primary)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--primary)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--orange-700)_10%,var(--secondary)_15%,var(--orange-500)_20%,var(--secondary)_25%,var(--orange-900)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

						showRadialGradient &&
							`[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
					)}
				></div>
			</div>
		</div>
	);
}

export function Bg() {
	return <div className="h-full w-full bg-main-bg bg-cover" />;
}
