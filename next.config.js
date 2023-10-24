/** @type {import('next').NextConfig} */
module.exports = {
  async headers () {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ]
  },
}
