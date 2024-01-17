import { NavbarModel } from "../models/containers/navbar.model";

export default function NavbarContainer({ children }: NavbarModel) {
	return (
		<div className="relative h-full">
			{/* <div className="absolute h-screen w-12 left-0 top-0 bottom-0 bg-slate-950"></div> */}
			{/* <div className="absolute h-screen w-12 right-0 top-0 bottom-0 bg-slate-950"></div> */}
			{children}
		</div>
	);
}
