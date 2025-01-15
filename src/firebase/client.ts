import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtw8oxuClY_bXxdruMJgfuI17zFQYJyJM",
  authDomain: "catalog-samicel-dev.firebaseapp.com",
  projectId: "catalog-samicel-dev",
  storageBucket: "catalog-samicel-dev.firebasestorage.app",
  messagingSenderId: "709595032908",
  appId: "1:709595032908:web:7fb1203ae7f0b5c810f3e9",
};

export const app = initializeApp(firebaseConfig);
