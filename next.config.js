// next.config.js

module.exports = {
    // Enabling static export
    output: 'export',  // This tells Next.js to export the site as static files
    
    // Optionally, enable trailing slashes in URLs
    trailingSlash: true, // This adds a trailing slash to all paths (e.g., /about/ instead of /about)
  
    // Other common Next.js settings
    reactStrictMode: true, // Enables React Strict Mode for catching potential issues
    images: {
      unoptimized: true, // This disables image optimization (useful for static exports)
    },
  
    // If you need to customize the webpack configuration, you can do so here
    webpack(config, { isServer }) {
      if (!isServer) {
        // Example: Customizations for client-side code (e.g., externals, environment-specific settings)
      }
      return config;
    },
  }
  