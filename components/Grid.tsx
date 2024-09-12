import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
	return (
		<section id="about">
			<BentoGrid>
				{gridItems.map((item, index) => {
					const {
						title,
						id,
						img,
						description,
						className,
						imgClassName,
						titleClassName,
						spareImg,
					} = item;
					return (
						<BentoGridItem
							id={id}
							key={(id || 0) + index}
							description={description}
							title={title}
							className={className}
							img={img}
							imgClassName={imgClassName}
							titleClassName={titleClassName}
							spareImg={spareImg}
						/>
					);
				})}
			</BentoGrid>
		</section>
	);
};

export default Grid;
