// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'tfc-storage',
    appId: '1:1093950249993:web:aff482485dd676a7982cd8',
    storageBucket: 'tfc-storage.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyCV4CRkO6cAihiefQj5MQ6BjUvp2306DAw',
    authDomain: 'tfc-storage.firebaseapp.com',
    messagingSenderId: '1093950249993',
    measurementId: 'G-BYDGDLFZWJ',
  },
  production: false,
  apiBase: "http://localhost:3000/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
