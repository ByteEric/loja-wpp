/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placeholder.com",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
