# 웹프로그래밍응용 3주차 정리

## 1. Web Application 개요

웹 애플리케이션은 웹 브라우저를 통해 실행되는 프로그램이다.
클라이언트(Client)와 서버(Server) 구조로 동작한다.

* 클라이언트: 사용자 인터페이스(UI)를 담당한다
* 서버: 데이터 처리 및 응답을 담당한다

---

## 2. Web Server (IIS, Tomcat, Apache)

웹 서버는 클라이언트 요청을 받아 응답을 반환하는 소프트웨어이다.

### 종류

* IIS: Microsoft에서 제공하는 웹 서버이다
* Tomcat: Java 기반 웹 서버이며 Servlet을 실행한다
* Apache: 가장 널리 사용되는 웹 서버이다

### 역할

* HTTP 요청을 처리한다
* 정적 파일(HTML, CSS, JS)을 제공한다
* 동적 요청을 처리하기 위해 WAS와 연동한다

### 최근 흐름

* Node.js 기반 서버가 많이 사용된다
* JavaScript 하나로 프론트엔드와 백엔드를 모두 개발할 수 있다

---

## 3. SPA vs MPA

### SPA (Single Page Application)

* 하나의 HTML 페이지에서 모든 기능을 처리한다
* 페이지 이동 시 새로고침이 발생하지 않는다
* JavaScript를 이용해 화면을 동적으로 변경한다

특징

* 사용자 경험이 빠르다
* 초기 로딩 속도는 느릴 수 있다
* 상태 관리가 중요하다

---

### MPA (Multi Page Application)

* 페이지 이동 시마다 새로운 HTML을 요청한다
* 전통적인 웹 구조이다

특징

* 구조가 단순하다
* SEO에 유리하다
* 페이지 이동 시 속도가 느릴 수 있다

---

## 4. DOM (Document Object Model)

DOM은 HTML 문서를 객체 구조로 표현한 모델이다.

### 특징

* 트리(Tree) 구조로 구성된다
* JavaScript를 통해 동적으로 조작 가능하다
* 화면 변경은 DOM 조작을 통해 이루어진다

---

## 5. 브라우저 렌더링 과정

브라우저는 다음 과정을 통해 화면을 생성한다.

1. Parsing

   * HTML → DOM Tree 생성
   * CSS → CSSOM Tree 생성

2. Style

   * DOM + CSSOM → Render Tree 생성

3. Layout

   * 요소의 위치와 크기를 계산한다

4. Paint

   * 실제 픽셀로 변환한다

5. Compositing

   * 레이어를 합쳐 화면에 출력한다

이 과정이 반복되면 성능 저하가 발생한다.

---

## 6. Real DOM vs Virtual DOM

### Real DOM

* 실제 브라우저의 DOM이다
* 변경 시 전체 구조에 영향을 줄 수 있다

### Virtual DOM

* 메모리 상에 존재하는 가상의 DOM이다
* 변경 사항만 비교하여 실제 DOM에 반영한다

### 장점

* 렌더링 성능 향상
* 불필요한 DOM 업데이트 감소

---

## 7. React 개요

React는 사용자 인터페이스(UI)를 만들기 위한 JavaScript 라이브러리이다. 

### 특징

* 컴포넌트 기반 구조
* Virtual DOM 사용
* 선언형 UI
* SPA 개발에 적합

---

## 8. JSX (JavaScript XML)

JSX는 JavaScript 안에서 HTML을 작성할 수 있는 문법이다.

### 특징

* 코드 가독성이 높다
* HTML과 JavaScript를 함께 사용할 수 있다
* 내부적으로 JavaScript 코드로 변환된다

### 기본 예제

```jsx id="ivn19k"
const element = <h1>Hello, world!</h1>;
```

### JavaScript 표현식 사용

```jsx id="p4v3ax"
const name = "React";
const element = <h1>Hello, {name}</h1>;
```

### 변환 과정

```jsx id="v50t3f"
const element = React.createElement(
  'h1',
  null,
  'Hello, world!'
);
```

---

## 9. 컴포넌트 (Component)

React는 UI를 독립적인 컴포넌트로 구성한다.

### 함수형 컴포넌트

```jsx id="bnvddq"
function MyButton() {
  return <button>Click</button>;
}
```

### 컴포넌트 조합

```jsx id="r6gr2h"
function App() {
  return (
    <div>
      <MyButton />
    </div>
  );
}
```

---

## 10. 렌더링 (Rendering)

렌더링은 데이터를 기반으로 화면을 생성하는 과정이다.

### React 렌더링 흐름

* JSX 생성
* Virtual DOM 생성
* Diffing 수행
* 실제 DOM 업데이트

---

## 11. index.html, index.js, App.js 관계

React 애플리케이션의 구조는 다음과 같다.

### 흐름

```id="29axbp"
index.html → index.js → App.js
```

### index.html

* 기본 HTML 구조를 담당한다
* `<div id="root"></div>`가 존재한다

### index.js

* React의 시작점이다
* App 컴포넌트를 root에 렌더링한다

### App.js

* 실제 UI를 구성하는 핵심 컴포넌트이다

---

## 12. 개발 환경 및 실행

### 프로젝트 생성

```bash id="ds2j3f"
npx create-react-app my-app
cd my-app
npm start
```

### 개발 모드

```bash id="v0b4sa"
npm start
```

### 배포 모드

```bash id="vaw3c7"
npm run build
```

---

## 13. 패키지 관리 도구

* npm: Node.js 패키지 관리 도구
* npx: 패키지를 실행하는 도구
* nvm: Node.js 버전 관리 도구
* yarn: npm을 대체하는 패키지 관리 도구

---

## 14. Babel & Webpack

### Babel

* 최신 JavaScript 코드를 구버전으로 변환한다
* JSX를 JavaScript로 변환한다

### Webpack

* 여러 파일을 하나로 묶는 번들러이다

---

## 15. 프로젝트 구조

```id="30yceq"
node_modules
public
src
```

### src 구조

```id="d72z3b"
components
pages
hooks
services
styles
utils
```

---

## 16. 배포 (Deploy)

```bash id="xf5bdr"
npm run build
npm install -g serve
serve -s build
```

### 개념

* Release: 새로운 버전을 배포하는 과정
* Deploy: 서버에 적용하는 과정
* Distribute: 사용자에게 제공하는 과정

---

# 마무리

* React는 컴포넌트 기반 UI 라이브러리이다
* JSX는 React.createElement로 변환된다
* Virtual DOM은 성능 최적화의 핵심이다
* SPA는 빠른 사용자 경험을 제공한다
* index.html → index.js → App.js 구조로 동작한다
* Node.js 기반 개발 환경이 주로 사용된다
---
