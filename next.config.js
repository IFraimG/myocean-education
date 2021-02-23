module.exports = {
  basePath: "/pupil",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/root",
        permanent: true,
      },
    ];
  },
};
