/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'http.cat',
				port: '',
				pathname: '/**',
			},
		],
	},
}

module.exports = nextConfig
