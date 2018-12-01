console.log('Hello world');

if (navigator.serviceWorker) {
  console.log('serviceWorker first try');
  registerPush('BMtvv6ypKsXF_b9J5IQjUMVohEenVZ-eAfQK3VJc1WB4wUWSPNgNr2fszEJazYF2bBYJnF2YAi2jIDLtdlE1tSE');
}
console.log('No serviceWorker');

function registerPush(appPubkey) {
  navigator.serviceWorker.register('service-worker.js');
  navigator.serviceWorker.ready.then(function(registration) {
      return registration.pushManager.getSubscription()
          .then(function(subscription) {
              console.log(JSON.stringify({ subscription: subscription }));
              if (subscription) {
                  return subscription;
              }

              return registration.pushManager.subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: urlBase64ToUint8Array(appPubkey)
              });
          }) 
          .then(function(subscription) {
              console.log(JSON.stringify({ subscription: subscription }));
          });
  });
}

function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i)  {
      outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

self.addEventListener('push', function(event) {
  console.log('Received push');
  console.log(event);

  if (event.data) {
    const dataText = event.data.text();
    notificationTitle = 'Received Payload';
    notificationOptions.body = `Push data: '${dataText}'`;
  }

  event.waitUntil(
    Promise.all([
      self.registration.showNotification(
        notificationTitle, notificationOptions)
    ])
  );
});


//
//{"subscription":{"endpoint":"https://fcm.googleapis.com/fcm/send/ct8wAGEINkE:APA91bHpsEAH_5PDOpo949y3umofbl69JQClI2H-dNoC7yeYnM4SzbRvQOTp2YV9GrbHP_fDH7GeFP7ilyJ4elJboHNJU4o-7mF_l06M2-yplF0P6d126N70JDHtGKhrEFyHMzfP6wak","expirationTime":null,"keys":{"p256dh":"BPBIBHIQokhJbdhvRgOjFlOTR5JKo_uIRklcYl0CR-8nlXoRh1w0uZmQzKX5tCepp7S6Htqwx6OG4iNSitVzxyE","auth":"oSjBK9jWDIJ2HJBWEtHHow"}}}
//