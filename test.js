const configuredWebPush = require('./web-push-config');

data = {"subscription":{"endpoint":"https://fcm.googleapis.com/fcm/send/fwYZk3a4dWU:APA91bFY0n4Wg266ZjqtcTCt0V5GL4f3FQEgIurLKaWGH8a0gUgtopIPHuo8z33VS3kVRzzjFfTrjweSe6Z9gs1mh3HDZsg4A6V_JHQ6RHv1OAjhOiZpnqwMRZYceuGALyc95VtZzBPl","expirationTime":null,"keys":{"p256dh":"BJQHpuk147qyvb0u95hB39JjgMdmlonwQhAsv1BpKBidGz7LXAPGLsFfkKK2U2AGmiQmHynj7EotRLKCFHNwNr8","auth":"CRki76k7TxKLcgTquk0xHw"}}};
data.payload = JSON.stringify({title: 'Annoyed yet?', message: 'Hello there!'});
// data.encoding = { contentEncoding: 'aes128gcm' };

console.log("here ");
console.log(configuredWebPush.vapidPublicKey);
console.log(data);

configuredWebPush.webPush.sendNotification(data.subscription, data.payload)
    .then(function (response) {
        console.log('Response: ' + response);
        //res.status(201).send(response);
    })
    .catch(function (e) {
        console.log('Error: ' + e);
        //res.status(201).send(e);
    });