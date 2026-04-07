# 5주차 정리

---

# 1. JSX (JavaScript + HTML)

## 핵심 개념

* JSX는 JavaScript + HTML 형태의 문법
* JSX는 React Element를 반환
* React Element는 DOM의 Node를 표현하는 객체

### 정리

* JSX → Element 생성
* Element → DOM에 반영

```jsx
const element = <h1>Hello</h1>;
```

JSX는 결국
"UI를 설명하는 JavaScript 코드"

---

# 2. Element vs Component

## Element

* React 앱의 최소 단위 (building block)
* 화면에 보여질 내용을 기술하는 객체
* DOM Node와 대응됨

## Component

"Element를 만들어주는 함수"

### 핵심 정의

* 입력: props
* 출력: React Element

```text
Component(props) → React Element
```

PDF 핵심 내용

* Component는 함수처럼 동작
* 입력(props)을 받아 UI(Element)를 생성 

---

# 3. Component 구조

## 특징

* 재사용 가능한 UI 단위
* 여러 Component를 조합하여 페이지 구성
* 레고 블록처럼 조립 가능

## 역할

* 데이터 → UI 변환

---

# 4. Component 종류

## 4.1 Function Component

```jsx
function Welcome(props){
  return <h1>안녕, {props.name}</h1>;
}
```

특징

* 단순하고 직관적
* 현재 React에서 기본 방식

---

## 4.2 Class Component

```jsx
class Welcome extends React.Component{
  render(){
    return <h1>안녕, {this.props.name}</h1>;
  }
}
```

특징

* 추가 기능(state 등)
* 현재는 함수형 + Hooks로 대체되는 추세

---

# 5. Component 네이밍 규칙

## 규칙

* 반드시 대문자로 시작

### 이유

* 소문자 → HTML 태그로 인식
* 대문자 → React Component로 인식 

```jsx
function Car() {}   // Component
function car() {}   // DOM 태그로 인식
```

---

# 6. Props

## 6.1 개념

* props = properties (속성)
* Component의 입력값

정의
부모 → 자식으로 전달되는 데이터

---

## 6.2 특징

* 읽기 전용 (immutable)
* 단방향 데이터 흐름
* Component 간 통신 수단

---

## 6.3 핵심 구조

```text
props → Component → Element
```

props를 바꾸면 UI(Element)가 변경됨

---

## 6.4 예제

```jsx
<MyComponent name="React" />
```

```jsx
const MyComponent = (props) => {
  return <div>{props.name}</div>;
};
```

---

## 6.5 다양한 props 사용

문자열

```jsx
<Main name="홍길동" />
```

숫자

```jsx
<Main name={9} />
```

여러 개

```jsx
<Main name="홍길동" color="blue" />
```

---

## 6.6 Boolean props

```jsx
<Main maleYn />
```

값 생략 = true

---

## 6.7 defaultProps

```jsx
Main.defaultProps = {
  name: '디폴트'
};
```

---

## 6.8 propTypes

```jsx
Main.propTypes = {
  name: PropTypes.string
};
```

역할

* 타입 체크
* 버그 예방

---

## 6.9 children

```jsx
<Wrapper>
  <Main />
</Wrapper>
```

```jsx
{props.children}
```

의미

* Component 내부에 들어가는 내용

---

# 7. 핵심 개념 정리

JSX

* UI를 표현하는 문법
* Element 생성

Element

* 화면에 보여지는 최소 단위

Component

* Element를 만드는 함수
* 입력: props
* 출력: Element

Props

* Component의 입력값
* 부모 → 자식 전달
* 읽기 전용

---

# 8. 핵심 흐름

```text
JSX → Element → Component → Props → UI
```

또는

```text
props → Component → React Element → DOM
```

---

# 9. 직관적 비유

* Component = 붕어빵 틀
* props = 재료
* Element = 완성된 붕어빵

같은 틀이라도 props에 따라 결과(UI)가 달라짐 

---

# 10. 실전 구조

```text
App.js
 ├── Header.js
 ├── Main.js
 └── Footer.js
```

```jsx
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
```
