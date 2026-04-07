# 코드 예제 리스트

---

## 1. Function Component 기본 예제

```jsx
function Welcome(props){
  return <h1>안녕, {props.name}</h1>;
}
```

---

## 2. Class Component 기본 예제

```jsx
class Welcome extends React.Component{
  render(){
    return <h1>안녕, {this.props.name}</h1>;
  }
}
```

---

## 3. Component 네이밍 예제

```jsx
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
```

---

## 4. Function Component (Header / Main / Footer)

```jsx
import React from 'react';

function Header(props) {
  return (
    <div>
      <header>
        <h1>헤더입니다.</h1>
      </header>
    </div>
  );
}
export default Header;
```

```jsx
import React from 'react';

function Main(props) {
  return (
    <div>
      <main>
        <h1>안녕하세요! 메인입니다.</h1>
      </main>
    </div>
  );
}
export default Main;
```

```jsx
import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer>
        <h1>푸터입니다.</h1>
      </footer>
    </div>
  );
}
export default Footer;
```

---

## 5. App.js (Function Component 조합)

```jsx
import React from 'react';
import Header from './funcComp/Header';
import Footer from './funcComp/Footer';
import Main from './funcComp/Main';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
```

---

## 6. Class Component (Header / Main / Footer)

```jsx
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>헤더입니다.</h1>
        </header>
      </div>
    );
  }
}
```

```jsx
import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>안녕하세요!! 메인입니다.</h1>
        </main>
      </div>
    );
  }
}
```

```jsx
import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <h1>푸터입니다.</h1>
        </footer>
      </div>
    );
  }
}
```

---

## 7. Props 기본 예제

```jsx
/* App.js */
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <MyComponent name="React"/>
  );
}
export default App;
```

```jsx
/* MyComponent.js */
import React from 'react';

const MyComponent = (props) => {
  return <div>{props.name}로 만드는 테스트 페이지</div>;
};

export default MyComponent;
```

---

## 8. Props 1개 전달

```jsx
function App() {
  return (
    <div>
      <Header />
      <Main name="홍길동"/>
      <Footer />
    </div>
  );
}
```

```jsx
function Main(props) {
  return (
    <div>
      <main>
        <h1>안녕하세요. {props.name} 입니다.</h1>
      </main>
    </div>
  );
}
```

---

## 9. Props 여러 개 전달

```jsx
<Main name="갓대희" color="blue"/>
```

```jsx
<h1 style={{color: props.color}}>
  안녕하세요. {props.name} 입니다.
</h1>
```

---

## 10. 숫자 Props

```jsx
<Main name={9} color="blue"/>
```

---

## 11. propTypes

```jsx
import PropTypes from 'prop-types';

Main.propTypes = {
  name: PropTypes.string
}
```

---

## 12. defaultProps

```jsx
Main.defaultProps = {
  name: '디폴트'
}
```

---

## 13. 필수 Props (isRequired)

```jsx
Main.propTypes = {
  name: PropTypes.string.isRequired,
}
```

---

## 14. Boolean Props

```jsx
<Main name="홍길동" color="blue" maleYn/>
```

```jsx
const msg = maleYn ? '남자' : '여자';
```

---

## 15. props.children

```jsx
function Wrapper(props) {
  return (
    <div style={{backgroundColor: 'yellow'}}>
      {props.children}
    </div>
  );
}
```

```jsx
<Wrapper>
  <Main color="blue"/>
</Wrapper>
```

---

## 16. 이미지 + 텍스트 Component (Function)

```jsx
function FPhotoText(props) {
  const url = "img/" + props.image + ".png";

  return (
    <div style={{border:"1px solid silver", margin:"8px", padding:"4px"}}>
      <img src={url} width="128" alt="computer"/>
      <span>{props.label}</span>
    </div>
  );
}
```

---

## 17. 이미지 Component 사용

```jsx
function App() {
  return (
    <div>
      <FPhotoText image="desktop" label="Desktop" />
      <FPhotoText image="notebook" label="NoteBook" />
      <FPhotoText image="pad" label="Pad" />
    </div>
  );
}
```

---

## 18. HTML + React 혼합 예제

```html
<script type="text/babel">
const dom = <div>
  <PhotoText image="pic1" label="데스크탑" />
</div>;

ReactDOM.render(dom, document.getElementById('root'));

function PhotoText(props) {
  return <div>{props.label}</div>;
}
</script>
```

---

## 19. Class 기반 이미지 Component

```jsx
export default class CPhotoText extends Component {
  getImageURL() {
    return "img/" + this.props.image + ".png";
  }

  render() {
    return (
      <div>
        <img src={this.getImageURL()} width="128"/>
        <span>{this.props.label}</span>
      </div>
    );
  }
}
```

---

## 20. 리스트 Component

```jsx
export default class RList extends Component {
  render() {
    const items = this.props.items.split(",");

    const itemsObj = items.map((e) => {
      return <li>{e}</li>;
    });

    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>{itemsObj}</ul>
      </div>
    );
  }
}
```

---

## 21. 리스트 사용

```jsx
<RList title="Colors" items="Red,Green,Blue,White" />
```

---

## 22. 화살표 함수 Component

```jsx
const TitleParts = (props) => (
  <div style={{backgroundColor: 'red', color: 'white'}}>
    <h3>{props.title}</h3>
  </div>
)
```

```jsx
const Book = (props) => (
  <div>
    <TitleParts title={props.title} />
  </div>
)
```
