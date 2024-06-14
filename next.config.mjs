/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['images.unsplash.com', 'daffodilvarsity.edu.bd', 'i.ibb.co', 'images.remotePatterns', 'images.domains', 'ui.aceternity.com'],
    },
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.pdf$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        });
        return config;
    }
};

export default nextConfig;
