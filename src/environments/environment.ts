// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  
  production: false,
  useEmulators: true,
  firebaseConfig: {
    apiKey: "AIzaSyB3_urIXwZSk1isy23ElkyVQjjk3WX751o",
    authDomain: "onlinebook-a779c.firebaseapp.com",
    projectId: "onlinebook-a779c",
    storageBucket: "onlinebook-a779c.appspot.com",
    messagingSenderId: "78846753008",
    appId: "1:78846753008:web:febda2147e03d20edd2a35",
    measurementId: "G-70HQSJZRDD"
  },
  algolia:{
    appId: 'YOXBFV7TK8',
    apiKey : '9a76d971acc4ab2225df7b67d5c598e9',
    indexName : 'OnlinEbook_post',
    
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
