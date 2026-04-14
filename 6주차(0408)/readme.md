# Web Programming - React Programming

---

##  Server / Browser / JS / Client 관계

- **Client(브라우저)** 가 요청하고, **Server** 가 처리해서 응답한다.
- Server에 접속하는 프로그램이 Browser이다.
- **JavaScript** 는 브라우저 안에서 동작하며 클라이언트와 서버 사이를 연결한다.

### PHP / ASP / JSP vs JavaScript

| 구분 | 실행 위치 | 역할 |
|------|-----------|------|
| PHP / ASP / JSP | 서버(Server-side) | 서버에서 HTML을 만들어주는 기술 |
| JavaScript | 클라이언트(Client-side) | 브라우저에서 화면을 동적으로 바꾸는 언어 |

> HTML을 만드는 것은 HTML component로 만든다.  
> function, class의 한계 → **function component** 로 변경되었다.

---

##  Component State

### 상태(state)란?

- **State란 렌더링 결과물에 영향을 주는 정보**
- state는 간단하게 말해서 **변수**이다.  
  하지만 `const`, `let` 등으로 선언한 변수와 다르게, **값이 변하면 관련 있는 컴포넌트들이 재렌더링되어 화면이 바뀐다.**
- state는 **컴포넌트의 내부에서 변경 가능한 데이터를 다루기 위해 사용하는 객체**이다.
- 일반적으로 컴포넌트의 내부에서 변경 가능한 데이터를 관리해야 할 때 사용한다.

### props와의 차이

- **props**의 특징은 컴포넌트 내부에서 값을 바꿀 수 없다는 것이다.
- 하지만 값을 바꿔야 하는 경우도 분명 존재하며, 이럴 때 **state**를 사용한다.
- state는 props와 다르게 **자동으로 생성되지 않아** 명시적으로 state를 기술해야 한다.

### state의 주요 특징

- 값을 저장하거나 변경할 수 있는 객체로, 보통 **이벤트와 함께 사용**된다.
- state는 컴포넌트의 현재 상황에 대한 정보를 나타내기 위해 리액트에서 쓰는 **일반 자바스크립트 객체**이다.
- **시간이 지남에 따라 변하는 데이터**, 즉 **컴포넌트의 메모리**라고 할 수 있다.
- 모든 컴포넌트에 state를 추가하고 업데이트할 수 있다.
- State 값이 변경되고 재렌더링이 필요한 경우, **React가 자동으로 계산하여 변경된 부분을 렌더링**한다.

### state 정의 시 주의사항

- State를 정의할 때 중요한 점은 **꼭 렌더링이나 데이터 흐름에 사용되는 것만 state에 사용**해야 한다.
- State가 변경될 경우 Component가 재렌더링되기 때문에, 렌더링과 데이터 흐름에 관련 없는 값을 포함하면 **불필요한 재렌더링이 발생하여 성능을 저하**시킬 수 있다.

---

##  State를 사용하는 이유

### 일반 변수를 사용하는 경우 (문제점)

- 변수는 변경되어도 **자동으로 화면이 바뀌지 않는다.**
- state는 변경되면 **자동으로 화면이 바뀌기** 때문에 state를 사용한다.
- 즉, 유동적인 변수를 사용할 때 화면에 그려지는 변수도 정상적으로 변경되길 원한다면 state를 사용한다.

```jsx
//  일반 변수 사용 - 화면이 바뀌지 않음
import React from 'react';

const Counter = () => {
  let count = 0;

  const plus = () => {
    count = count + 1;
    console.log(count); // 값은 제대로 증가하지만 화면은 안 바뀜
  };

  const minus = () => {
    count = count - 1;
    console.log(count); // 값은 제대로 감소하지만 화면은 안 바뀜
  };

  return (
    <div className='container' style={{margin: 15}}>
      <h2 className='int'>{ count }</h2>
      <button className='plus' onClick={plus}>+</button>
      <button className='minus' onClick={minus}>-</button>
    </div>
  );
};

export default Counter;
```

> **왜 화면이 변경되지 않는가?**  
> 일반 변수는 변경되어도 자동으로 화면이 재렌더링되지 않는다.  
> 리액티브한 프론트엔드에서 상태는 단순한 변수가 아니라,  
> **이 값이 변했을 때 화면에 반영되도록 연결된 것**을 상태라고 한다.  
> 그래서 state가 아닌 일반 변수는 바뀌어도 화면이 변하지 않는 것이다.

### state를 사용하는 경우 (해결)

```jsx
//  state 사용 - 값이 변경되면 화면도 자동으로 재렌더링
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className='container'>
      <h2 className='int'>{ count }</h2>
      <button className='plus' onClick={plus}>+</button>
      <button className='minus' onClick={minus}>-</button>
    </div>
  );
};

export default Counter;
```

>  참고: 리액트 컴포넌트는 **부모 컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링** 된다 (바뀐 내용이 없더라도).

---

##  setState

### setState는 비동기적으로 작동한다

- `setState` 바로 아래에 `console.log`로 state를 출력해 봤을 때, **값이 바로 바뀌지 않는 것**을 확인할 수 있다.
- 분명히 `setCount`로 count를 변경했는데, 변경한 후에 `console.log`로 찍어보니 값이 바로 반영되지 않는다.

```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
    console.log(count); // setCount로 count를 변경한 후 바로 콘솔에 찍어도 이전 값이 출력됨
  };

  const minus = () => {
    setCount(count - 1);
    console.log(count); // 마찬가지로 이전 값이 출력됨
  };
  // ...
};
```

### 동기(Synchronous) vs 비동기(Asynchronous)

| 구분 | 설명 |
|------|------|
| **동기 (Synchronous)** | 요청을 보냈다면, 응답을 받아야 다음 동작이 이루어진다. 순차적으로 실행. 블로킹(작업 중단) 발생. |
| **비동기 (Asynchronous)** | 작업 종료 여부에 관계없이 다음 작업을 실행한다. 실행 순서를 보장하지 않음. 블로킹 발생하지 않음. |

> `setCount`는 이벤트 핸들러 안에서 현재 state의 값에 대한 **변화를 요청하기만** 하는 것이라서,  
> 이벤트 핸들러가 끝나고 리액트가 상태를 바꾸고 화면을 다시 그리기를 기다려야 한다.

### setState가 비동기인 이유

- state는 값이 변경되면 리렌더링이 발생하는데, 변경되는 state가 많을수록 리렌더링이 계속 일어나고 속도가 저하되는 등 **성능적으로 문제**가 발생한다.
- 그래서 **16ms 동안 변경된 상태 값들을 모아서 한 번에 리렌더링을 진행**하는데, 이를 **batch(일괄) update**라고 한다.

### setState 동작의 주의사항 - 같은 키 덮어쓰기

- 리액트는 이벤트 핸들러가 닫히는 시점에 setState를 종합하여 한 번에 처리한다.
- state도 결국 객체이기 때문에, **같은 키 값을 가진 경우라면 가장 마지막 실행값으로 덮어씌워진다.**
  - 이는 객체를 합치는 함수인 `Object.assign()`에서 확인할 수 있다.

```jsx
//  아래처럼 setNumber를 세 번 써도 1+2+3=6이 아니라 마지막 setNumber의 결과인 3씩 증가
<button onClick={() => {
  setNumber(number + 1);
  setNumber(number + 2);
  setNumber(number + 3); // 이 값만 반영됨 → 3씩 증가
}}>+3</button>
```

### 콜백 함수로 최신 값 반영하기

- `setCount(count + 1)`에서 `count`는 **렌더링 시작 시점의 count**이기 때문에 최근 변경이 반영되지 않는다.
- 콜백 함수를 사용하면 **항상 최신 값을 인자로 받아와서** 처리할 수 있다.

```jsx
//  콜백 함수 사용으로 최신 값 반영 → 1+2+3=6씩 증가
<button onClick={() => {
  setNumber(number => number + 1);
  setNumber(number => number + 2);
  setNumber(number => number + 3);
}}>+3</button>
```

---

##  state의 종류

- **클래스형 컴포넌트**가 가지고 있는 state
- **함수형 컴포넌트**가 `useState`라는 함수로 사용하는 state

> React v16.8 이전까지는 함수 컴포넌트에서는 state를 사용할 수 없었다.  
> 따라서 state를 사용하기 위해서는 어쩔 수 없이 **클래스 컴포넌트**를 사용해야 했다.  
> React v16.8부터 도입된 **useState Hook**을 사용하면 함수 컴포넌트에서도 state를 사용할 수 있게 되었다.

---

##  Class Component - State

### State 생성

- React에서 state는 props와 다르게 **자동 생성되지 않는다.**
- 즉, 아무 설정 없이 코드를 작성하면 state가 없는 상태가 된다.
- 따라서 props와 다르게, **state를 생성하기 위해서는 생성자에서 명시적으로 state를 기술**해야 한다.
- 이때 state는 **객체 형식**이어야 한다.

#### constructor 함수를 쓰는 경우

클래스 constructor 안에 `this.state = {}` 형태로 선언한다.

```jsx
class MyCompo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state1: 초기값,
      state2: 초기값
    };
  }

  render() { ... }
}
```

#### constructor 함수를 안 쓰는 경우

클래스 안에 `state = {};` 형태로 선언한다.

```jsx
class MyCompo extends Component {
  state = {
    state1: 초기값,
    state2: 초기값
  };

  render() { ... }
}
```

### State 사용

- `render()` 함수 안에서 **비구조 할당(Destructuring Assignment)** 을 사용하여 state 값을 가져올 수 있다.

```jsx
render() {
  const { state1, state2 } = this.state; // 비구조 할당
  return <>{state1}, {state2}</>;
}
```

>  비구조 할당 예시:
> ```js
> const array = [1, 2];
> const [one, two] = array;
> ```

- 값 변경 시에는 `setState`를 쓰며, `this.setState({ 스테이트명: 신규값 })` 형태로 사용한다.

```jsx
render() {
  const { state1, state2 } = this.state;
  return (
    <>
      {state1}, {state2}
      <button onClick={() => { this.setState({ state1: '변신' }); }}>변경</button>
    </>
  );
}
```

### State 설정 시 주의사항 

- React에서 state는 가변적으로 변경 가능한 값이지만, **state에 직접적으로 값을 설정하면 안 된다!**

```jsx
//  잘못된 방법 - 절대 이렇게 하지 말자
this.state.count = count + 1;
this.state.comment = 'Hello';
```

- `this.state`에 직접적으로 값을 설정할 수 있는 건 유일하게, **처음 state를 초기화하는 생성자(constructor)에서만 가능**하다.
- 그 이외에서는 직접 설정하면 안 된다.

### 올바른 state 설정 방법 

올바른 state 설정은 **`setState` 함수를 사용**하는 것이다.

```jsx
//  올바른 방법 1
this.setState({ count: count + 1 });

//  올바른 방법 2 - 화살표 함수 사용
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));

//  올바른 방법 3 - 일반 함수 사용 (위와 동일)
this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});
```

#### setState의 동작 순서

1. `setState`를 통해 state의 값을 변경한다.
2. React가 state의 변경을 감지한다.
3. 화면을 **리렌더링**한다.

### setState 후 특정 작업 실행

- state 값을 바꿔준 뒤 특정 작업(함수)을 실행하고 싶을 때, `setState`의 **두 번째 파라미터에 콜백(callback) 함수**를 등록하여 작업을 처리할 수 있다.

```jsx
this.setState({ 바꿀 스테이트값 기술 }, () => { 여기 콜백 함수 });

// 예시
onClick = { () => {
  this.setState(
    { state1: state1 + 1 },
    () => {
      console.log('setState 호출');
      console.log(this.state.state1);
    }
  );
}}
```

### State 설정 및 사용 - 실습 예제 1

```jsx
// App.js
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '홍길동',
      age: 300,
      job: 'developer',
    };
  }

  render() {
    const { name, age, job } = this.state;
    return (
      <div style={{margin: 15}}>
        <div>name: {name}</div>
        <div>age: {age}</div>
        <div>job: {job}</div>
      </div>
    );
  }
}
```

```jsx
// index.js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

**출력 결과:**
```
name: 홍길동
age: 300
job: developer
```

### State 설정 및 사용 - 실습 예제 2 (카운터)

```jsx
// Counter.js
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // state 초기값 설정
    this.state = {
      count: 0
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>현재 Count : {count}</h2>
        <button onClick={() => {
          this.setState({ count: count + 1 });
        }}>카운트 +1</button>
      </div>
    );
  }
}

export default Counter;
```

```jsx
// index.js
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
);
```

---

Ai 요약(Claude)
> - `state`는 컴포넌트 내부에서 관리되는 **변경 가능한 데이터**이다.
> - 일반 변수와 달리, state가 변하면 **화면이 자동으로 재렌더링**된다.
> - `setState`는 **비동기**로 동작하며, React는 여러 setState 호출을 **batch update**로 한 번에 처리한다.
> - state는 **절대 직접 변경하지 말고**, 반드시 `setState()`를 통해 변경한다.
> - 클래스형에서는 `this.setState()`, 함수형에서는 `useState` Hook의 setter 함수를 사용한다.
