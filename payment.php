
<!DOCTYPE html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://www.paypalobjects.com/api/checkout.js"></script>
</head>


<body>
   
    <div id="paypal-button-10">Basic<br> 1 website with 10 pages, 5GB storage.<br> $10</div>
    <script>

        paypal.Button.render({

            // leave as 'sandbox'
            env: 'sandbox', // sandbox | production

            // PayPal Client IDs - replace with your own
            // Create a PayPal app: https://developer.paypal.com/developer/applications/create
            client: {
                // sandbox App is the No_payments app thru paypal developer.
                sandbox: 'ASxjTlobh07A2Uu3c4NEj3DlkN8FcZY_qeA_9ctdjkQBuPKct-rEupiulc2YUipOt7k7_yVh0VC9K3T0',
                // production is for live payments. Leave blank for our purposes.
                production: ''
            },

            // customize the button. See https://developer.paypal.com/docs/archive/checkout/how-to/customize-button/
            locale: 'en_US',
            style: {
            size: 'small',
            color: 'blue',
            shape: 'pill',
            tagline: 'false',
            },

            // Show the buyer a 'Pay Now' button in the checkout flow
            commit: true,

            // payment() is called when the button is clicked
            payment: function (data, actions) {
                // Make a call to the REST api to create the payment
                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: {total: '10', currency: 'CAD'}
                            }
                        ]
                    }
                });
            },

            // onAuthorize() is called when the buyer approves the payment
            onAuthorize: function (data, actions) {
                // Make a call to the REST api to execute the payment
                return actions.payment.execute().then(function () {
                    // enter next flow here when complete.... go to x webpage to use the editor for example.
                    // can use ajax here to update backend
                    // see https://developer.paypal.com/docs/archive/checkout/how-to/customize-flow/
                  window.alert('Payment Complete!');
                });
            }
        }, '#paypal-button-10');

    </script>

    <div id="paypal-button-20"><br> Intermediate <br> 4 websites, 50 pages per site, 15GB storage. <br> $20</div>
    <script>
        paypal.Button.render({

            // leave as 'sandbox'
            env: 'sandbox', // sandbox | production

            // PayPal Client IDs - replace with your own
            // Create a PayPal app: https://developer.paypal.com/developer/applications/create
            client: {
                // sandbox App is the No_payments app thru paypal developer.
                sandbox: 'ASxjTlobh07A2Uu3c4NEj3DlkN8FcZY_qeA_9ctdjkQBuPKct-rEupiulc2YUipOt7k7_yVh0VC9K3T0',
                // production is for live payments. Leave blank for our purposes.
                production: ''
            },

            // customize the button. See https://developer.paypal.com/docs/archive/checkout/how-to/customize-button/
            locale: 'en_US',
            style: {
            size: 'small',
            color: 'blue',
            shape: 'pill',
            tagline: 'false',
            },

            // Show the buyer a 'Pay Now' button in the checkout flow
            commit: true,

            // payment() is called when the button is clicked
            payment: function (data, actions) {
                // Make a call to the REST api to create the payment
                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: {total: '20', currency: 'CAD'}
                            }
                        ]
                    }
                });
            },

            // onAuthorize() is called when the buyer approves the payment
            onAuthorize: function (data, actions) {
                // Make a call to the REST api to execute the payment
                return actions.payment.execute().then(function () {
                    // enter next flow here when complete.... go to x webpage to use the editor for example.
                    // can use ajax here to update backend
                    // see https://developer.paypal.com/docs/archive/checkout/how-to/customize-flow/
                  window.alert('Payment Complete!');
                });
            }
        }, '#paypal-button-20');

    </script>

    <div id="paypal-button-30"><br> Premium <br> Unlimited websites and pages, 50GB storage. <br> $30</div>
    
    <script>
        paypal.Button.render({

            // leave as 'sandbox'
            env: 'sandbox', // sandbox | production

            // PayPal Client IDs - replace with your own
            // Create a PayPal app: https://developer.paypal.com/developer/applications/create
            client: {
                // sandbox App is the No_payments app thru paypal developer.
                sandbox: 'ASxjTlobh07A2Uu3c4NEj3DlkN8FcZY_qeA_9ctdjkQBuPKct-rEupiulc2YUipOt7k7_yVh0VC9K3T0',
                // production is for live payments. Leave blank for our purposes.
                production: ''
            },

            // customize the button. See https://developer.paypal.com/docs/archive/checkout/how-to/customize-button/
            locale: 'en_US',
            style: {
            size: 'small',
            color: 'blue',
            shape: 'pill',
            tagline: 'false',
            },

            // Show the buyer a 'Pay Now' button in the checkout flow
            commit: true,

            // payment() is called when the button is clicked
            payment: function (data, actions) {
                // Make a call to the REST api to create the payment
                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: {total: '30', currency: 'CAD'}
                            }
                        ]
                    }
                });
            },

            // onAuthorize() is called when the buyer approves the payment
            onAuthorize: function (data, actions) {
                // Make a call to the REST api to execute the payment
                return actions.payment.execute().then(function () {
                    // enter next flow here when complete.... go to x webpage to use the editor for example.
                    // can use ajax here to update backend
                    // see https://developer.paypal.com/docs/archive/checkout/how-to/customize-flow/
                  window.alert('Payment Complete!');
                });
            }
        }, '#paypal-button-30');

    </script>
</body>