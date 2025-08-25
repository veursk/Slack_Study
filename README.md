# Slack Study - 슬랙 클론 프로젝트

[ZeroCho의 Slack 클론코딩](https://www.inflearn.com/course/%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%EC%8B%A4%EC%8B%9C%EA%B0%84%EC%B1%84%ED%8C%85?srsltid=AfmBOorldYEccU7-d8MKW-FKBmqF4jBZ9j-t7rtGH2jWP4harHL5r3Kh)과 함께
React와 Node.js를 사용하여 구현한 실시간 메신저 애플리케이션입니다. Slack의 주요 기능들을 모방하여 워크스페이스, 채널, 다이렉트 메시지 기능을 제공합니다. <br>
**SBS 사내 채팅앱을 개발하기전에 선 학습 후 팀 공유 목적**

## 🚀 주요 기능

### 사용자 관리

- 회원가입 및 로그인
- 프로필 관리 (Gravatar 연동)
- 세션 기반 인증

### 워크스페이스 관리

- 워크스페이스 생성 및 참여
- 워크스페이스 멤버 초대
- 다중 워크스페이스 지원

### 채널 기능

- 공개 채널 생성 및 관리
- 채널 멤버 초대
- 실시간 채팅
- 무한 스크롤을 통한 채팅 기록 로딩
- 읽지 않은 메시지 알림

### 다이렉트 메시지 (DM)

- 1:1 개인 메시지
- 실시간 메시지 전송
- 온라인 상태 표시

### 실시간 기능

- Socket.IO를 통한 실시간 메시지 전송
- 새 메시지 알림 (Toast)
- 사용자 온라인 상태 실시간 업데이트

## 🛠 기술 스택

### Frontend

- **React 18** - UI 라이브러리
- **TypeScript** - 정적 타입 검사
- **React Router v6** - 클라이언트 사이드 라우팅
- **SWR** - 데이터 페칭 및 캐싱
- **Emotion** - CSS-in-JS 스타일링
- **Socket.IO Client** - 실시간 통신
- **Webpack 5** - 모듈 번들러

### Backend (직접 개발 안하고, 강의에 있는 소스 사용)

- **Node.js** - 런타임 환경
- **Express.js** - 웹 프레임워크
- **Sequelize** - ORM
- **MySQL** - 데이터베이스
- **Socket.IO** - 실시간 통신
- **Passport.js** - 인증 미들웨어
- **PM2** - 프로세스 매니저

## 📁 프로젝트 구조

```
Slack_Study/
├── front/                    # React 프론트엔드
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── ChatBox/        # 메시지 입력 박스
│   │   ├── ChatList/       # 채팅 목록
│   │   ├── ChannelList/    # 채널 목록
│   │   ├── DMList/         # DM 목록
│   │   ├── EachChannel/    # 개별 채널 아이템
│   │   ├── EachDM/         # 개별 DM 아이템
│   │   └── Modal/          # 모달 컴포넌트들
│   ├── hooks/              # 커스텀 훅
│   │   ├── useInput.ts     # 입력 상태 관리
│   │   └── useSocket.ts    # 소켓 연결 관리
│   ├── layouts/            # 레이아웃 컴포넌트
│   │   ├── App/           # 메인 앱 라우터
│   │   └── Workspace/     # 워크스페이스 레이아웃
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── Channel/       # 채널 페이지
│   │   ├── DirectMessage/ # DM 페이지
│   │   ├── Login/         # 로그인 페이지
│   │   └── SignUp/        # 회원가입 페이지
│   ├── typings/           # TypeScript 타입 정의
│   └── utils/             # 유틸리티 함수
└── back/                   # Node.js 백엔드
    ├── config/            # 설정 파일
    ├── models/            # Sequelize 모델
    │   ├── user.js        # 사용자 모델
    │   ├── workspace.js   # 워크스페이스 모델
    │   ├── channel.js     # 채널 모델
    │   ├── channelChat.js # 채널 채팅 모델
    │   └── dm.js          # DM 모델
    ├── passport/          # 인증 설정
    ├── routes/            # API 라우터
    ├── socket.js          # Socket.IO 서버
    └── app.js             # Express 앱
```

## 🚦 시작하기

### 사전 요구사항

- Node.js (v14 이상)
- MySQL
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**

```bash
git clone <repository-url>
cd Slack_Study
```

2. **백엔드 설정**

```bash
cd back
npm install

# 환경 변수 설정 (.env 파일 생성)
NODE_ENV=development
COOKIE_SECRET=your-cookie-secret
MYSQL_PASSWORD=your-mysql-password

# 데이터베이스 설정 및 실행
npm run dev
```

3. **프론트엔드 설정**

```bash
cd front
npm install
npm run dev
```

4. **접속**

- 프론트엔드: http://localhost:3090
- 백엔드 API: http://localhost:3095

## 🔧 주요 컴포넌트 설명

### useSocket Hook

Socket.IO 연결을 관리하는 커스텀 훅으로, 워크스페이스별로 소켓 연결을 생성하고 관리합니다.

### SWR을 통한 데이터 관리

- 서버 상태 관리 및 캐싱
- 실시간 데이터 업데이트
- Infinite scrolling 구현

### 실시간 메시징

- Socket.IO를 통한 양방향 통신
- 채널별, DM별 실시간 메시지 전송
- 새 메시지 알림 및 자동 스크롤

## 🎯 주요 URL 구조

- `/login` - 로그인 페이지
- `/signup` - 회원가입 페이지
- `/workspace/:workspace` - 워크스페이스 메인
- `/workspace/:workspace/channel/:channel` - 채널 채팅
- `/workspace/:workspace/dm/:id` - 다이렉트 메시지

## 📊 데이터베이스 스키마

### 주요 테이블

- **Users** - 사용자 정보
- **Workspaces** - 워크스페이스 정보
- **Channels** - 채널 정보
- **ChannelChats** - 채널 채팅 메시지
- **DMs** - 다이렉트 메시지
- **WorkspaceMembers** - 워크스페이스 멤버 관계
- **Mentions** - 멘션 정보

## 🔒 보안 기능

- Passport.js를 통한 로컬 인증
- 세션 기반 사용자 상태 관리
- CORS 설정
- Helmet을 통한 보안 헤더 설정
- HPP(HTTP Parameter Pollution) 방지

## 📱 반응형 디자인

Emotion을 사용한 CSS-in-JS 스타일링으로 반응형 웹 디자인을 구현했습니다.

## 🚀 배포

프로덕션 환경에서는 PM2를 사용하여 Node.js 앱을 관리합니다.

```bash
# 백엔드 배포
cd back
npm run start

# 프론트엔드 빌드
cd front
npm run build
```

## 📄 라이선스

이 프로젝트는 학습 목적으로 제작되었습니다.
