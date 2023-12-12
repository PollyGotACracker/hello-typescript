# Settings

## 기본 설정

1. Node.js 설치
2. eslint, live server VSCode 플러그인 설치
3. TS 문법 검사: eslint 사용
   - prettier, beautifier 비활성화
     3.1. ctl + , 로 VSCode 설정을 열고 format on save 검색
     3.2. Editor: Format On Save 설정 해제

## 프로젝트 생성

1. `npm init -y`
2. tsconfig.json: `npx tsc --init`
3. .eslintrc.js: `npx eslint --init`, 또는 `npm init @eslint/config`
4. webpack:

```shell
# webpack, webpack-cli
npm install --save-dev webpack webpack-cli
# TypeScript compiler, loader
npm install --save-dev typescript ts-loader
```

5. babel:

```shell
npm i -D @babel/core
npm i -D @babel/preset-env
# .ts => .js compiler for TypeScript
npm i -D @babel/preset-typescript
# .jsx => .js compiler for React
npm i -D @babel/preset-react
```

6. ESlint, Prettier:

```shell
npm i -D eslint
npm i -D @typescript-eslint/eslint-plugin
npm i -D @typescript-eslint/parser
npm i -D prettier
npm i -D eslint-plugin-prettier
```

## JS 프로젝트에 TS 적용

0. JSDoc 으로 JS 파일에 Type 시스템 적용

   - 파일 최상단에 아래 주석을 작성하면 VSCode 에서 자동으로 감지하여 JS 코드를 분석한다.

   ```js
   // @ts-check
   ```

1. 타입스크립트 기본 환경 구성

   - NPM init
   - TS 라이브러리 설치
   - TS 설정 파일 tsconfig.json 생성 및 기본값 추가
   - JS 파일을 TS 파일로 확장자 변환
   - `tsc` 명령어로 TS 컴파일하기
     (또는 단축어 스크립트 작성 후 `npm run build`)
     이때, 기능 변경은 절대 하지 않는다.

2. 명시적 `any` 선언

- `tsconfig.json` 파일에 `noImplicitAny` 값을 `true` 로 추가

## tsc 명령어로 compile

```shell
tsc index.ts
```

- 단축어 스크립트 작성

```js
// package.json
{
  "scripts":{
    "build": "tsc"
  }
}
```
