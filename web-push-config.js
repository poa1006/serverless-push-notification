const webPush = require('web-push');

// const vapidPublicKey = process.env.VAPID_PUBLIC_KEY || '';
// const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY || '';

const vapidPublicKey = 'BMtvv6ypKsXF_b9J5IQjUMVohEenVZ-eAfQK3VJc1WB4wUWSPNgNr2fszEJazYF2bBYJnF2YAi2jIDLtdlE1tSE'
const vapidPrivateKey = 'LfFP5MhSPpX5tjkw_o97xepfQDkwPwR11YoRYnzDgmQ'

if (vapidPublicKey === '' || vapidPrivateKey === '') {
    console.log("You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY " +
      "environment variables. You can use the following ones:");
    console.log(webPush.generateVAPIDKeys());
} else {
    webPush.setVapidDetails(
        'mailto:email@outlook.com',
        vapidPublicKey,
        vapidPrivateKey
    );
}

module.exports = {
    webPush: webPush,
    vapidPublicKey: vapidPublicKey
}