/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	basePath: "/portfolio",
	assetPrefix: "/portfolio/",
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.aceternity.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
