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

  - [x] 픽토그램 (신호등, 횡단보도) 코드 안보고 만들어보기 - [완성 링크](https://play.tailwindcss.com/8zuWGjQXT7)
  - [x] PlayTailwindCSS에서 [연습 과제](https://dribbble.com/shots/23428988-Lenscraft-Photography-Website) 구현하기 (아이콘, 폰트는 제외) - [완성 링크](https://play.tailwindcss.com/7Ya1tLXCHv)

- [x] ERD 다이어그램 만들기

![image](https://github.com/DearYuto/7CodeStudy/assets/154968122/03979d4f-bfa6-4a9d-8b71-7c37ec2be9d8)

**- Song 테이블의 src는 유니크하며, 변경되지 않는다고 가정하에 PK로 설정하였다.**

- [x] 더미데이터로 DB Table 만들어서 lib/dummyData.js 의 Song, Channel, Playlist 관계도 파악하기
- 객체 이름, 어떤 필드가 있는지 정리하고 객체의 관계가 1:1, 1:N, N:M 파악하기

- [x] (선택미션) 고도화 - MockServer 만들기
  - [x] 더미데이터를 내려주는 Express API 서버 만들기 - [GET API](https://github.com/DearYuto/mockserver) 하나 만들었어요.

### 🔥 3주 차 미션

- [x] 리팩토링 - 스크롤 이벤트에 디바운싱 걸기
      디바운싱을 사용해 스크롤 이벤트 성능 최적화 진행하기

  - 스로틀링과 디바운싱 차이점 기록하기

- [x] 언제 전역상태를 써야하는지, contextAPI로만 상태관리를 하면 어떻게 되는지 특징 확인하기

- [x] Zustand 상태관리의 내부 동작에 대해 이해하기

  - Context Provider를 사용하지 않아도 되는 이유
  - Redux, Recoil과의 차이점

- [ ] Route 설정은 서버에서 가능하지만, 클라이언트에서도 할 수 있는데 클라이언트 컴포넌트에서 Route를 바꾸는 방법이 무엇이 있을까?

  - 꼭 서버로직에서 리다이렉트를 해야하는 경우는 언제인지
  - 각각 어떤 이름의 함수를 사용해야 하는지

- [ ] useEffect 함수를 사용해 클라이언트 렌더링을 처리하여 배경을 변경하지 않고 서버 컴포넌트로 처리한 후 개선하는 방법의 계획을 작성하기

  - 서버 컴포넌트에서 처리를 시키고, 캐싱하는 방법으로 개선 고려하기

### 🔥 4주 차 미션

- [ ] ref가 변할 가능성 - 다음 코드를 리팩토링 했을 때 warning이 사라지는 이유가 무엇인가요 ?

```tsx
useEffect(() => {
  const handleScroll = () => {
    const scrollValue = headRef.current?.scrollTop;
    setIsScrolled(scrollValue !== 0);
  };

  headRef.current?.addEventListener('scroll', handleScroll);
  return () => {
    // warning message : The ref value 'headRef.current' will likely have changed by the time this effect cleanup function runs. If this ref points to a node rendered by React, copy 'headRef.current' to a variable inside the effect, and use that variable in the cleanup function.eslintreact-hooks/exhaustive-deps
    headRef.current?.removeEventListener('scroll', handleScroll);
  };
}, []);
```

```tsx
useEffect(() => {
  const currentHeadRef = headRef.current;

  const handleScroll = () => {
    const scrollValue = currentHeadRef?.scrollTop;
    setIsScrolled(scrollValue !== 0);
  };

  currentHeadRef?.addEventListener('scroll', handleScroll);
  return () => {
    currentHeadRef?.removeEventListener('scroll', handleScroll);
  };
}, []);
```

- [ ] react 에서 map을 순회하여 컴포넌트를 렌더링 할 때 key값을 넘겨야 하는 이유가 무엇인가요? (성능 최적화, 상태 유지, 독립적인 엘리먼트와 관련하여 작성)

- [ ] UI를 개발하면서 사용자 경험(UX)을 신경 쓴 사례가 있나요?

- [ ] Javascript 대비 어떤점이 Typescript을 사용했을때 장점이 있었나요? 단점은 어떤 것이 있나요 ?

- [ ] 불변성은 무엇이고, zustand에서 불변성 관리를 어떻게 하나요? 또, zustand는 불변성을 유지하나요 ?

- [ ] ?. 과 ?? 연산자의 이름이 무엇이고, 언제 사용하는지 설명해주세요.
