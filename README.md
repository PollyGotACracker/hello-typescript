# 🚀 Hello TypeScript

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

## compile with tsc command

```shell
tsc index.ts
```
