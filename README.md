# Next.js 유튜브 뮤직 클론 스터디

> 스터디 기간: 2024. 04. 01 ~ 2024. 04. 29

- 월요일 오후 9시 주간 미팅

- 데일리 팀 미팅 오후 10시 30분 (약 15분간 짧게 진행)

---

### 🔥 1주 차 미션

- [x] Next.js 14 세팅하기
- [x] Next.js vercel github 연결 후 배포하기

### 🔥 2주 차 미션

- [x] Next.js 핵심 개념 이론 공부 - [블로그에 기록 완료](https://dearyuto.github.io/docs/category/interview)

  - 브라우저의 렌더링 과정을 간략히 설명해 주세요.
  - React에서 서버 컴포넌트, 클라이언트는 언제 사용하나요?
  - Next.js 사용하면서 SSR의 문제점이 있나요? susepnse 로 어떻게 해결할 수 있나요?
  - Next.js 에서는 DataFetching 전략에 따라서 아래 4가지 방식으로 SSR을 구현 합니다. 그 차이점이 무엇인가요? (Streaming with Suspense, Static Data, Dynamic Data, Incremental Static Regeneration)
  - 애니메이션 컴포넌트 라이브러리가 동작이 안 될 때 애니메이션 동작 여부는 useState로 관리를 하고 있다. SSR이후 애니메이션이 동작하지 않을 때 어떻게 해결할 수 있나요 ?
  - CSS Position relative,absoulte CSS의 z-index 속성 이해하기 (position에 따라 z-index가 어떻게 달라지는지 규칙을 설명하세요.)

- [x] tailwindCSS 연습하기

  - [x] 픽토그램 (신호등, 횡단보도) 코드 안보고 만들어보기
        - [완성 링크](https://play.tailwindcss.com/8zuWGjQXT7)
  - [x] PlayTailwindCSS에서 [연습 과제](https://dribbble.com/shots/23428988-Lenscraft-Photography-Website) 구현하기 (아이콘, 폰트는 제외)
        - [완성 링크](https://play.tailwindcss.com/7Ya1tLXCHv)
- [x] ERD 다이어그램 만들기

![image](https://github.com/DearYuto/7CodeStudy/assets/154968122/03979d4f-bfa6-4a9d-8b71-7c37ec2be9d8)

**- Song 테이블의 src는 유니크하며, 변경되지 않는다고 가정하에 PK로 설정하였다.**

  - [x] 더미데이터로 DB Table 만들어서 lib/dummyData.js 의 Song, Channel, Playlist 관계도 파악하기
  - 객체 이름, 어떤 필드가 있는지 정리하고 객체의 관계가 1:1, 1:N, N:M 파악하기

- [x] (선택미션) 고도화 - MockServer 만들기
  - [x] 더미데이터를 내려주는 Express API 서버 만들기 - [GET API](https://github.com/DearYuto/mockserver) 하나 만들었어요.
