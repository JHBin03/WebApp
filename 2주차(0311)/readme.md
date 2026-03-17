# 웹프로그래밍응용 2주차 정리

## 1. npm과 npx

### 1.1 npm (Node Package Manager)

* Node.js 패키지를 설치하고 관리하는 도구이다.
* `package.json`을 기반으로 의존성을 관리한다.
* 전역(global) 또는 로컬(local)로 설치 가능하다.

```bash
npm install axios
```

---

### 1.2 npx (Node Package Execute)

* 패키지를 설치하지 않고 실행하는 도구이다.
* 최신 버전을 임시로 다운로드하여 실행한다.
* 일회성 작업에 적합하다.

```bash
npx create-react-app my-app
```

---

### 1.3 차이 정리

| 구분    | npm       | npx    |
| ----- | --------- | ------ |
| 역할    | 패키지 설치/관리 | 패키지 실행 |
| 설치    | 필요        | 불필요    |
| 사용 목적 | 지속 사용     | 일회성 실행 |

---

## 2. Vite

### 2.1 개념

* 빠른 프론트엔드 개발을 위한 빌드 도구이다.
* React, Vue, Svelte 등을 지원한다.

---

### 2.2 특징

* 개발 서버 속도가 매우 빠르다.
* 설정이 간단하다.
* ES Module 기반으로 동작한다.

---

### 2.3 Vite vs Webpack

| 구분  | Vite | Webpack |
| --- | ---- | ------- |
| 속도  | 빠름   | 느림      |
| 번들링 | 필요 시 | 전체      |
| 설정  | 간단   | 복잡      |

---

## 3. React 프로젝트 생성

### 3.1 Vite 방식

```bash
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
```

---

### 3.2 CRA (Create React App) 방식

```bash
npx create-react-app my-app
cd my-app
npm start
```

---

### 3.3 의미

* 복잡한 설정(Webpack, Babel)을 자동으로 구성한다.
* 개발자가 바로 React 개발을 시작할 수 있게 한다.

---

## 4. JSX (JavaScript XML)

### 4.1 개념

* JavaScript 안에서 HTML과 유사한 문법을 사용하는 확장 문법이다.
* Babel에 의해 JavaScript로 변환된다.

```javascript
const element = <h1>Hello, JSX!</h1>;
```

---

### 4.2 특징

* HTML + JavaScript 결합
* React 요소 생성에 사용
* `{}`로 JavaScript 표현식 사용 가능

---

## 5. JSX 장점

### 5.1 가독성 향상

* HTML과 유사하여 직관적이다.

---

### 5.2 코드 간결성

* 구조를 쉽게 표현할 수 있다.

---

### 5.3 JavaScript와 결합

```javascript
const name = "React";
<h1>Hello {name}</h1>
```

---

### 5.4 조건부 렌더링

```javascript
{isLoggedIn ? "Welcome" : "Login"}
```

---

### 5.5 이벤트 처리

```javascript
<button onClick={handleClick}>Click</button>
```

---

## 6. JSX 문법

### 6.1 하나의 부모 요소 필요

```javascript
return (
  <div>
    <h1>Hello</h1>
    <p>React</p>
  </div>
);
```

---

### 6.2 JavaScript 표현식

```javascript
<h1>{2 + 3}</h1>
```

---

### 6.3 속성 사용

```javascript
<h1 className="title">Hello</h1>
```

---

### 6.4 조건부 렌더링

```javascript
{isAdmin && <p>관리자</p>}
```

---

### 6.5 반복 렌더링

```javascript
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

---

### 6.6 이벤트 처리

```javascript
<input onChange={handleChange} />
```

---

## 정리

* npm은 패키지를 설치하고 관리한다.
* npx는 패키지를 실행한다.
* Vite와 CRA는 React 프로젝트 생성 도구이다.
* JSX는 JavaScript 안에서 HTML처럼 UI를 작성하는 문법이다.
* JSX는 가독성이 좋고 유지보수가 쉽다.

---

