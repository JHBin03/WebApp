# 02React_CRA pdf 예시코드들.

##  JSX 사용 코드

```javascript
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is a JSX example.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

---

##  JSX 미사용 코드

```javascript
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello, JSX!"),
    React.createElement("p", null, "This is a JSX example.")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
```

---

##  JSX 가독성 예시

```javascript
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>JSX를 사용하면 가독성이 좋아집니다.</p>
    </div>
  );
}
```

```javascript
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello, React!"),
    React.createElement(
      "p",
      null,
      "JSX를 사용하면 가독성이 좋아집니다."
    )
  );
}
```

---

##  코드가 간결하고 유지보수가 쉬움

```javascript
function List() {
  return (
    <ul>
      <li>React</li>
      <li>Vue</li>
      <li>Angular</li>
    </ul>
  );
}
```

```javascript
function List() {
  return React.createElement(
    "ul",
    null,
    React.createElement("li", null, "React"),
    React.createElement("li", null, "Vue"),
    React.createElement("li", null, "Angular")
  );
}
```

---

##  JavaScript 결합

```javascript
const name = "React";

function Greeting() {
  return <h1>Hello, {name}!</h1>;
}
```

```javascript
const name = "React";

function Greeting() {
  return React.createElement("h1", null, `Hello, ${name}!`);
}
```

---

##  조건부 렌더링

```javascript
function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>;
}
```

```javascript
function Greeting({ isLoggedIn }) {
  return React.createElement(
    "h1",
    null,
    isLoggedIn ? "Welcome back!" : "Please log in"
  );
}
```

---

##  스타일 적용

```javascript
const buttonStyle = { backgroundColor: "blue", color: "white" };

function Button() {
  return <button style={buttonStyle}>Click me</button>;
}
```

```javascript
const buttonStyle = { backgroundColor: "blue", color: "white" };

function Button() {
  return React.createElement(
    "button",
    { style: buttonStyle },
    "Click me"
  );
}
```

---

##  JSX 기본 구조 (오류 예시 포함)

```javascript
function App() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>React에서 JSX를 사용합니다.</p>
    </div>
  );
}
```

```javascript
function App() {
  return (
    <>
      <h1>Hello, JSX!</h1>
      <p>React에서 JSX를 사용합니다.</p>
    </>
  );
}
```

---

##  JavaScript 표현식

```javascript
const name = "React";

function App() {
  return <h1>Hello, {name}!</h1>;
}
```

```javascript
function App() {
  return <p>2 + 3 = {2 + 3}</p>;
}
```

```javascript
function getGreeting(name) {
  return `Hello, ${name}!`;
}

function App() {
  return <h1>{getGreeting("React")}</h1>;
}
```

---

##  속성(props) 사용

```javascript
const imgUrl = "https://via.placeholder.com/150";

function App() {
  return <img src={imgUrl} alt="Sample Image" />;
}
```

```javascript
const styleObj = { color: "blue", fontSize: "20px" };

function App() {
  return <h1 style={styleObj}>Styled Text</h1>;
}
```

```javascript
function App() {
  return <h1 className="title">Hello, JSX!</h1>;
}
```

---

##  조건부 렌더링 (다른 방식)

```javascript
function App({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>;
}
```

```javascript
function App({ isAdmin }) {
  return (
    <div>
      <h1>Hello, User!</h1>
      {isAdmin && <p>관리자 권한이 있습니다.</p>}
    </div>
  );
}
```

---

##  반복 렌더링

```javascript
const fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];

function App() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

---

##  이벤트 처리

```javascript
function App() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

```javascript
function App() {
  function handleChange(event) {
    console.log("입력값:", event.target.value);
  }

  return <input type="text" onChange={handleChange} />;
}
```

---

##  Book 컴포넌트

```javascript
import React from "react";

function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
    </div>
  );
}

export default Book;
```

---

##  Library 컴포넌트

```javascript
import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
    </div>
  );
}

export default Library;
```

---

##  index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);

reportWebVitals();
```
