const configuredWebPush = require('./web-push-config');

data = {"subscription":{"endpoint":"https://fcm.googleapis.com/fcm/send/ct8wAGEINkE:APA91bHpsEAH_5PDOpo949y3umofbl69JQClI2H-dNoC7yeYnM4SzbRvQOTp2YV9GrbHP_fDH7GeFP7ilyJ4elJboHNJU4o-7mF_l06M2-yplF0P6d126N70JDHtGKhrEFyHMzfP6wak","expirationTime":null,"keys":{"p256dh":"BPBIBHIQokhJbdhvRgOjFlOTR5JKo_uIRklcYl0CR-8nlXoRh1w0uZmQzKX5tCepp7S6Htqwx6OG4iNSitVzxyE","auth":"oSjBK9jWDIJ2HJBWEtHHow"}}};
data.payload = JSON.stringify({title: 'Annoyed yet?', message: 'Hello there!'});
data.encoding = { contentEncoding: 'aes128gcm' };

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