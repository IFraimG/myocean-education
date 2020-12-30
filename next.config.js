module.exports = {
  basePath: "/pupil",
  async redirects() {
    return [
      {
        source: "/pupil",
        destination: "/pupil/root",
        permanent: true,
      },
    ];
  },
};
