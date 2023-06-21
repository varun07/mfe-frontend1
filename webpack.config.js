const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'frontend1',

  exposes: {
    // './Component': './src/app/app.component.ts',
    './CustomerModule': './src/app/customers/customers.module.ts',
    './OrdersComponent': './src/app/orders/orders.component.ts',
    './PaymentComponent': './src/app/payment/payment.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
  },

});
