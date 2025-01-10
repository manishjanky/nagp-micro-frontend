const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "payment",

  exposes: {
    "./Module": "./projects/payment/src/app/payment.module.ts",
  },

  shared: {
    "@libs/shared": {
      singleton: true,
      requiredVersion: "auto",
      import: "libs/shared/src/index",
    },
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
