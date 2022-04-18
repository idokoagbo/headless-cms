module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '091edd68321f7c1b41acf8f2a43ec004'),
  },
});
