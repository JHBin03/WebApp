# 예제, 핵심 코드들

1. DOM tree

```
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link href="style.css" rel="stylesheet">
  <title>Critical Path</title>
</head>
<body>
  <p>Hello <span>web performance</span> students!</p>
  <div><img src="awesome-photo.jpg"/></div>
</body>
</html>
```

---

2. CSSOM tree

```
body { font-size: 16px }
p { font-weight: bold }
span { color: red }
p span { display: none }
img { float: right }
```

---

3. Real DOM vs Virtual DOM (Real DOM)

```
<div id="app">
  <ul>
    <li>
      <input type="checkbox" class="toggle" />
      todo list item 1
      <button class="remove">삭제</button>
    </li>
    <li class="completed">
      <input type="checkbox" class="toggle" checked />
      todo list item 2
      <button class="remove">삭제</button>
    </li>
  </ul>
  <form>
    <input type="text" />
    <button type="submit">추가</button>
  </form>
</div>
```

---

4. Real DOM vs Virtual DOM (Virtual DOM)

```
function virtualDom(type, props, ...children) {
  return { type, props, children: children.flat() }
}

virtualDom('div', { id: 'app' },
  virtualDom('ul', null,
    virtualDom('li', null,
      virtualDom('input', { type: 'checkbox', className: 'toggle' }),
      'todo list item 1',
      virtualDom('button', { className: 'remove' }, '삭제')
    ),
    virtualDom('li', { className: 'completed' },
      virtualDom('input', { type: 'checkbox', className: 'toggle', checked: true }),
      'todo list item 2',
      virtualDom('button', { className: 'remove' }, '삭제')
    )
  ),
  virtualDom('form', null,
    virtualDom('input', { type: 'text' }),
    virtualDom('button', { type: 'submit' }, '추가')
  )
);
```

---

5. React 시작하기

```
npx create-react-app my-app
cd my-app
npm start
```

---

6. App.js

```
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```
---

1. JSX 코드 예제

```jsx
const element = <h1>Hello, world!</h1>;
```

---

2. JSX → JavaScript (createElement 변환)

```jsx
const element = React.createElement(
  'h1',
  null,
  'Hello, world!'
);
```

---

3. JSX에서 변수 사용

```jsx
const name = "HBin";
const element = <h1>Hello, {name}</h1>;
```

---

4. JSX 속성(attribute)에 값 넣기

```jsx
const element = <img src={user.avatarUrl} />;
```

---

5. Book.jsx (함수 컴포넌트)

```jsx
function Book(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.author}</h2>
    </div>
  );
}
```

---

6. Library.jsx (컴포넌트 사용)

```jsx
function Library() {
  return (
    <div>
      <Book name="React" author="Dan Abramov" />
      <Book name="JS" author="Someone" />
    </div>
  );
}
```

---

7. index.js (렌더링)

```jsx
ReactDOM.render(
  <Library />,
  document.getElementById('root')
);
```

---

# 2. Web Programming02.pdf (코드 예제)
---

1. React 시작하기

```bash
npx create-react-app my-app
cd my-app
npm start
```

→ 

---

2. Production build

```bash
npm run build
```

---

3. serve 실행 (배포 테스트)

```bash
npm install -g serve
serve -s build
```
