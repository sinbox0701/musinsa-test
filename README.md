# MUSINSA FRONT END TEST

## Stack

- Typescript
- React
- Redux
- Axios
- Tailwind

## 구동 빙법

```
npm install
npm run start
```

## 구성

- state 관리 -> redux
  - 검색, 세일상품, 단독상품, 품절상품 필터 활성
  - 검색 자동 완성에 저장되는 상품명 배열
  - 검색어
    ※ 프로젝트 확장 시 필터와 검색 관련 state는 여러 페이지에서 사용하는 것이 좋을 것이라 판단하여 redux를 이용하여 구현 함
- 각 필터 기능 구현
  - 중복 활성 허용
  - 우측 새로고침 버튼시 필터 초기화
- 검색창 & 필터 활성
  - 검색창 활성 시 토글 기능 정지
  - 검색 완료 이후 토글 사용 가능
  - 토글 활성 시 검색창 활성 불가
  - 토글 전부 비활성시 검색창 이용가능
- 무한 스크롤
  - useCallBack과 IntersectionObserver를 이용하여 구현
    ※ 라이브러리 없이 react에서 지원하는 useCallBack과 IntersectionObserver API 이용
- 검색어 자동 완성
  - 조회한 상품명을 저장한 후 입력한 값이 포함된 상품명 출력 구현
  - 상품명을 누르면 그 이름으로 검색 가능
