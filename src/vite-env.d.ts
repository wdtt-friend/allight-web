/// <reference types="vite/client" />

import '@emotion/react';
import { SerializedStyles } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    // 테마 타입 정의 (필요시)
  }
}

// Emotion css prop 타입 정의
declare module 'react' {
  interface HTMLAttributes<T> {
    css?: SerializedStyles;
  }
}