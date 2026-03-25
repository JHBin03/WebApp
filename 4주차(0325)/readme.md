#  4주차 수업 정리

## 1. Rendering Element

* React에서 **Element는 UI의 가장 작은 단위**이다. 

* 화면에 표시될 내용을 담고 있는 **JavaScript 객체**이다.

* HTML 요소와 비슷하지만, **실제 DOM이 아닌 Virtual DOM에 존재**한다. 

* DOM의 각 노드는 결국 HTML 태그로 구성된다.

* React Element의 특징

  * 가상 DOM에 존재
  * 실제 DOM으로 변환되어 브라우저에 렌더링됨

---

## 2. Element 생성 방법

### 2.1 JSX (JavaScript XML)

```jsx
const element = <div>Hello, world!</div>;
```

* HTML과 유사한 문법을 사용하여 Element를 생성한다.

* JavaScript 확장 문법이며 공식 JS 문법은 아니다. 

* Babel과 같은 트랜스파일러를 통해
  → `React.createElement()` 형태로 변환된다.

* 장점

  * HTML처럼 작성 가능 → 가독성 높음
  * JS + HTML을 한 파일에서 작성 가능

---

### 2.2 React.createElement()

```javascript
const element = React.createElement('div', null, 'Hello, world!');
```

* 직접 Element를 생성하는 방식
* 구조

```javascript
React.createElement(type, props, ...children)
```

* type: 태그 이름 또는 컴포넌트
* props: 속성 객체
* children: 자식 요소

---

## 3. JSX 주요 문법

### 3.1 하나의 부모 요소 필요

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

* 반드시 하나의 최상위 요소로 감싸야 한다.
  → Virtual DOM 비교를 효율적으로 하기 위함

---

### 3.2 JavaScript 표현식 사용

```jsx
const name = "React";
const element = <h1>Hello, {name}</h1>;
```

* `{}` 내부에 JS 표현식 사용 가능

---

### 3.3 조건부 렌더링

```jsx
{isLogin ? <div>로그인</div> : <div>비회원</div>}
```

* JSX 내부에서는 `if` 대신 **삼항 연산자 사용**

---

### 3.4 속성 및 스타일

```jsx
<div className="test" style={{ backgroundColor: "red" }}></div>
```

* `class` → `className`
* `style` → 객체 형태
* camelCase 사용 (`backgroundColor`)

---

### 3.5 주석

```jsx
{/* 주석 */}
```

---

## 4. Component

* Component는 **Element를 생성하고 관리하는 함수 또는 클래스**이다. 

### 4.1 함수형 컴포넌트

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

### 4.2 클래스형 컴포넌트

```jsx
class App extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

* 특징

  * 재사용 가능
  * 독립적인 UI 단위
  * 여러 Element를 조합하여 UI 구성

---

## 5. Element vs Component

| 구분  | Element           | Component      |
| --- | ----------------- | -------------- |
| 정의  | UI의 가장 작은 단위      | UI를 구성하는 모듈    |
| 형태  | 객체                | 함수 또는 클래스      |
| 재사용 | 불가능               | 가능             |
| 변경  | 새로운 Element 생성 필요 | 상태 변화로 자동 업데이트 |

* Element는 Component에 의해 생성된다.
* Component는 여러 Element를 조합한다.

---

## 6. React Element의 특징 (Immutable)

* Element는 **불변 객체(immutable)**이다. 

```jsx
element.props.children = "Hi"; // 불가능
```

* 변경하려면 새로운 Element 생성

```jsx
const newElement = <h1>Hi</h1>;
```

---

## 7. Rendering 과정

React의 렌더링은 다음 4단계를 따른다. 

### 1. 초기 렌더링

* Virtual DOM 생성
* 실제 DOM 생성 후 브라우저에 표시

### 2. 상태 변화 (state / props)

* 변경 발생 시 새로운 Virtual DOM 생성

### 3. 비교 (Diffing)

* 이전 Virtual DOM vs 새로운 Virtual DOM 비교

### 4. 업데이트

* 변경된 부분만 실제 DOM에 반영
* 최소 DOM 조작 → 성능 최적화

---

## 8. React DOM Node

* React 앱이 렌더링되는 **최상위 DOM 요소**이다. 

```html
<div id="root"></div>
```

---

### 렌더링 과정 코드

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

* 과정

  1. root DOM 선택
  2. React 앱 연결
  3. 컴포넌트 렌더링

---

## 9. React 구조 (index.html / index.js / App.js)

* `index.html`

  * root div 존재

* `index.js`

  * ReactDOM으로 렌더링 시작

* `App.js`

  * 실제 UI 구성

→ React 앱의 전체 흐름 구조

---

## 10. React와 일반 JavaScript 차이

### 순수 JavaScript

```javascript
const h1 = document.createElement("h1");
h1.textContent = "Hello";
document.getElementById("root").append(h1);
```

### React

```javascript
const element = <h1>Hello</h1>;
root.render(element);
```

* 차이점

  * JS: 직접 DOM 조작
  * React: Virtual DOM → 자동 업데이트
