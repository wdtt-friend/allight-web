# allight-web

React 19 + Vite SPA integrating with the allight-server API

## 기술 스택

- **React 19** - use() 등 React19 신규 기능 적용
- **TypeScript** - 타입 안전성 보장
- **Vite** - 빠른 개발 서버와 빌드 보장
- **Zustand** - 전역 UI 상태 관리
- **TanStack Query** - 서버 상태 관리
- **Emotion** - CSS-in-JS 스타일링
- **Prettier** - 코드 포맷팅
- **ESLint** - 코드 품질 관리

## 설치 및 실행

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 http://localhost:3000에서 실행됩니다.

### 기타 스크립트

- `npm run build` - 프로덕션 빌드
- `npm run lint` - ESLint 검사
- `npm run preview` - 빌드 결과 미리보기

## 환경 변수 설정

프로젝트 루트에 환경 변수 파일을 생성하세요:

```bash
# .env.local (개발 환경)
VITE_APP_URL=http://localhost:3000
# .env.production (프로덕션 환경)
VITE_APP_URL=https://allight-web.vercel.app
```

> ⚠️ 환경 변수 파일들은 `.gitignore`에 포함되어 Git에 커밋되지 않습니다.

## FE 아키텍처

FSD(Feature-Sliced Design)는 프론트엔드 프로젝트의 확장성과 유지보수성을 높이기 위한 아키텍처 방법론입니다. 비즈니스 로직을 중심으로 코드를 구성하여 팀 협업과 코드 재사용성을 극대화합니다.

### 레이어별 역할

#### **app/** - 애플리케이션 설정

- **역할**: 앱의 전역 설정, 라우팅, 프로바이더
- **의존성**: 모든 레이어에 의존 가능
- **예시**: 라우터 설정, 글로벌 스타일, 프로바이더 설정

#### **pages/** - 페이지 컴포넌트

- **역할**: 각 라우트에 대응하는 페이지 컴포넌트
- **의존성**: widgets, features, entities, shared
- **예시**: 홈페이지, 프로필 페이지, 설정 페이지

#### **widgets/** - 독립적인 UI 블록

- **역할**: 독립적으로 동작하는 복합 UI 컴포넌트
- **의존성**: features, entities, shared
- **예시**: 헤더, 사이드바, 푸터, 대시보드

#### **features/** - 비즈니스 기능

- **역할**: 특정 비즈니스 기능을 담당하는 모듈
- **의존성**: entities, shared
- **예시**: 로그인, 사용자 프로필 관리, 알림

#### **entities/** - 비즈니스 엔티티

- **역할**: 비즈니스 도메인의 핵심 엔티티
- **의존성**: shared만 의존 가능
- **예시**: 사용자, 게시글, 댓글, 상품

#### **shared/** - 공통 코드

- **역할**: 프로젝트 전반에서 공통으로 사용되는 코드
- **의존성**: 다른 레이어에 의존하지 않음
- **예시**: UI 컴포넌트, 유틸리티, API 클라이언트

### 폴더 구조

```
src/
├── app/                    # 앱 설정, 라우팅, 글로벌 스타일
│   ├── providers/         # React Query, Zustand Provider
│   ├── router/           # 라우팅 설정
│   └── styles/           # 글로벌 스타일
├── pages/                # 페이지 컴포넌트
│   ├── home/
│   ├── profile/
│   └── settings/
├── widgets/              # 독립적인 UI 블록
│   ├── header/
│   ├── sidebar/
│   └── footer/
├── features/             # 비즈니스 기능
│   ├── auth/
│   ├── user-profile/
│   └── notifications/
├── entities/             # 비즈니스 엔티티
│   ├── user/
│   ├── post/
│   └── comment/
├── shared/               # 공통 UI, 유틸리티
│   ├── ui/              # 기본 컴포넌트
│   ├── lib/             # 유틸리티, 헬퍼
│   ├── hooks/           # 공통 훅
│   └── api/             # API 클라이언트
└── assets/              # 정적 자산
```

## 📝 개발 가이드라인

### 컴포넌트 작성 규칙

- 컴포넌트는 카멜케이스(camelCase)로 명명
- props는 TypeScript 인터페이스로 정의
- Emotion을 사용한 CSS-in-JS 스타일링

### 상태 관리

- **전역 UI 상태**: Zustand
- **서버 상태**: TanStack Query
- **로컬 상태**: useState, useReducer

### 스타일링

- Emotion의 css prop 사용
- 공통 스타일은 shared/ui에 정의
- 반응형 디자인 고려

## 커밋 메시지 컨벤션

```
[Feat]: 새로운 기능 추가
[Fix]: 버그 수정
[Refactor]: 리팩토링
[Test]: 테스트 코드 추가/수정
[Chore]: 의존성/라이브러리 설치/수정
[Docs]: 문서 수정
```

## 배포

- **Vercel**: https://allight-web.vercel.app
- 자동 배포: main 브랜치 푸시 시 자동 배포
