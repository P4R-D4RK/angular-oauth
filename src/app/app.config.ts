import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'task-oauth-18',
        appId: '1:173406146380:web:c48ef71a4374cf7098c9e9',
        storageBucket: 'task-oauth-18.firebasestorage.app',
        apiKey: 'AIzaSyCMK2UdJTBy6Ge9nHaCDWKU1k3Egfl2pfg',
        authDomain: 'task-oauth-18.firebaseapp.com',
        messagingSenderId: '173406146380',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
