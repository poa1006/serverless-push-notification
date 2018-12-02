self.addEventListener('push', function(event) {
  console.log('Received push');
  console.log(event);

  // if (event.data) {
  //   const dataText = event.data.text();
  //   notificationTitle = 'Received Payload';
  //   notificationOptions.body = `Push data: '${dataText}'`;
  // }
  const payload = event.data ? event.data.text() : 'no payload';
  console.log(payload);

  const data = JSON.parse(payload);

  event.waitUntil(
    Promise.all([
      self.registration.showNotification(
        data.title,
        {
          body:  data.message
        })
    ])
  );
});

self.addEventListener('notificationclick', function(event) {
  console.log("click!!!");
  event.notification.close();

  let clickResponsePromise = Promise.resolve();
  if (event.notification.data && event.notification.data.url) {
    clickResponsePromise = clients.openWindow(event.notification.data.url);
  }

  event.waitUntil(
    Promise.all([
      clickResponsePromise
    ])
  );
});

//
//{"subscription":{"endpoint":"https://fcm.googleapis.com/fcm/send/ct8wAGEINkE:APA91bHpsEAH_5PDOpo949y3umofbl69JQClI2H-dNoC7yeYnM4SzbRvQOTp2YV9GrbHP_fDH7GeFP7ilyJ4elJboHNJU4o-7mF_l06M2-yplF0P6d126N70JDHtGKhrEFyHMzfP6wak","expirationTime":null,"keys":{"p256dh":"BPBIBHIQokhJbdhvRgOjFlOTR5JKo_uIRklcYl0CR-8nlXoRh1w0uZmQzKX5tCepp7S6Htqwx6OG4iNSitVzxyE","auth":"oSjBK9jWDIJ2HJBWEtHHow"}}}
//