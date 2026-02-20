/// <reference types="vite/client" />

declare module '*.jpg';
declare module '*.png';
declare module '*.webp';
declare module '*.svg';

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
