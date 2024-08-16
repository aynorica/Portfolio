import JumboText from "../typo/jumbo-text.component";
import NormalText from "../typo/normal-text.component";

export default function AddressComponent() {
	return (
		<div className="w-full flex flex-wrap justify-start items-start gap-6 max-w-xl pt-10">
			<div className="w-full flex flex-col gap-2">
				<JumboText
					text="ADDRESS"
					className="xl:text-2xl lg:text-2xl md:text-2xl text-lg"
				/>
				<NormalText
					text="Çeliktepe, Çınarcık Sokağı No:25, 34413 Kâğıthane/İstanbul"
					className="md:text-base font-medium"
				/>
			</div>
			<div className="w-1/2 flex flex-col gap-2">
				<JumboText
					text="EMAIL"
					className="xl:text-2xl lg:text-2xl md:text-2xl text-lg"
				/>
				<NormalText
					text="amirdeilamizadeh1996@gmail.com"
					className="md:text-base font-medium"
				/>
			</div>
			<div className="max-w-64 flex flex-col gap-2">
				<JumboText
					text="PHONE"
					className="xl:text-2xl lg:text-2xl md:text-2xl text-lg"
				/>
				<NormalText
					text="+90 531 086 82 08"
					className="md:text-base font-medium"
				/>
			</div>
		</div>
	);
}
