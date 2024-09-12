/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	basePath: "/portfolio",
	assetPrefix: "/portfolio/",

	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
