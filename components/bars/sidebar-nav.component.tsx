"use client";
import { ContainerInterface } from "@/Models/Interfaces/main-container.interface";
import {
	IconBrandGithubCopilot,
	IconFiles,
	IconNavigationUp,
	IconPlugConnected,
	IconSmartHome,
	IconUserCircle,
	IconUserPlus,
} from "@tabler/icons-react";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./sidebar-component";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { UriEnum } from "@/Models/Enums/uri.enum";

export default function SideBarNavigator({ children }: ContainerInterface) {
	const [open, setOpen] = useState(false);
	const links = [
		{
			label: "Home",
			href: UriEnum.home,
			icon: (
				<IconSmartHome className="text-secondary h-7 w-7 flex-shrink-0" />
			),
		},
		{
			label: "About Me",
			href: UriEnum.about,
			icon: (
				<IconUserCircle className="text-secondary h-7 w-7 flex-shrink-0" />
			),
		},
		{
			label: "Experience",
			href: UriEnum.experience,
			icon: (
				<IconFiles className="text-secondary h-7 w-7 flex-shrink-0" />
			),
		},
		{
			label: "Testimonials",
			href: UriEnum.testimonials,
			icon: (
				<IconUserPlus className="text-secondary h-7 w-7 flex-shrink-0" />
			),
		},
		{
			label: "Contact",
			href: UriEnum.contact,
			icon: (
				<IconPlugConnected className="text-secondary h-7 w-7 flex-shrink-0" />
			),
		},
	];
	return (
		<div
			className={cn(
				"rounded-md h-full flex flex-col md:flex-row bg-transparent w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
				// for your use case, use `h-screen` instead of `h-[60vh]`
			)}
		>
			<Sidebar open={open} setOpen={setOpen}>
				<SidebarBody
					className={`justify-between gap-10 ${
						!open
							? " bg-gradient-to-br from-primary to-cyan-950/50"
							: "md:bg-gradient-to-r bg-gradient-to-b from-primary md:via-cyan-950/20 via-cyan-950/90 md:to-orange-950/0 to-cyan-950/80"
					} `}
				>
					<div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
						<div className="mt-8 flex flex-col gap-2">
							{links.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
					</div>
					<div>
						<SidebarLink
							link={{
								label: "Amir Deilamizadeh",
								href: "#",
								icon: (
									<Image
										src="/images/profile.jpg"
										className="h-7 w-7 flex-shrink-0 rounded-full"
										width={50}
										height={50}
										alt="Avatar"
									/>
								),
							}}
						/>
					</div>
				</SidebarBody>
			</Sidebar>
			<div className="flex flex-1 bg-transparent max-w-full">
				{children}
			</div>
		</div>
	);
}
export const Logo = () => {
	return (
		<Link
			href="#"
			className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
		>
			<div className="h-7 w-7 rounded-full overflow-hidden justify-center items-center">
				<Image
					src="/images/profile.jpg"
					alt="profile-pic"
					width={50}
					height={50}
					className="w-full"
				/>
			</div>
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="font-medium text-black dark:text-white whitespace-pre"
			>
				Acet Labs
			</motion.span>
		</Link>
	);
};
export const LogoIcon = () => {
	return (
		<Link
			href="#"
			className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
		>
			<div className="w-8 h-8 rounded-full overflow-hidden flex justify-center items-center">
				<Image
					src="/portfolio//images/profile.jpg"
					alt="profile-pic"
					width={30}
					height={30}
					className="w-full"
				/>
			</div>
		</Link>
	);
};

// Dummy dashboard component with content
const Dashboard = () => {
	return (
		<div className="flex flex-1">
			<div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-transparent flex flex-col gap-2 flex-1 w-full h-full">
				<div className="flex gap-2">
					{[...new Array(4)].map((i) => (
						<div
							key={"first-array" + i}
							className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
						></div>
					))}
				</div>
				<div className="flex gap-2 flex-1">
					{[...new Array(2)].map((i) => (
						<div
							key={"second-array" + i}
							className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
						></div>
					))}
				</div>
			</div>
		</div>
	);
};
