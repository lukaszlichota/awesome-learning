module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dd1130d3bf6d521bb195511620d7645a'),
  },
});
