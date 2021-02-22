module.exports = {
  basePath: "/pupil",
  async redirects() {
    return [
      {
        source: "/pupil",
        destination: "/root",
        permanent: true,
      },
    ];
  },
};
