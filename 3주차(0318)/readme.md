# 웹프로그래밍응용 3주차 정리

## DOM (Document Object Model)

* HTML 문서를 객체(Object) 형태로 구조화한 모델이다
* 브라우저는 HTML을 DOM 트리 구조로 변환하여 관리한다
* JavaScript는 DOM을 통해 웹 페이지의 내용을 동적으로 변경한다
* 화면을 직접 수정하는 것이 아니라 DOM을 수정하는 방식이다

---

## SPA vs MPA

### SPA (Single Page Application)

* 하나의 HTML 페이지에서 모든 기능을 처리한다
* 페이지 이동 시 전체를 새로고침하지 않는다
* 필요한 부분만 JavaScript로 업데이트한다
* 대표 예: React, Vue

특징

* 사용자 경험이 빠르다
* 초기 로딩 속도는 느릴 수 있다

---

### MPA (Multi Page Application)

* 페이지 이동 시마다 새로운 HTML을 요청한다
* 전통적인 웹 방식이다

특징

* 구조가 단순하다
* 페이지 이동 시 속도가 느릴 수 있다

---

## Web Server (IIS, Tomcat, Apache)

* 웹 서버는 클라이언트 요청을 받아서 응답을 반환하는 역할을 한다

종류

* IIS: Microsoft에서 제공하는 웹 서버
* Tomcat: Java 기반 웹 서버 (Servlet 실행)
* Apache: 가장 널리 사용되는 웹 서버

특징

* 정적 파일(HTML, CSS, JS)을 제공한다
* 요청을 받아 처리하고 응답을 반환한다

최근 흐름

* Node.js 기반으로 JavaScript 서버를 많이 사용한다
* 프론트엔드와 백엔드 모두 JavaScript로 개발 가능하다

---

## JSX

* JavaScript + XML/HTML을 결합한 확장 문법이다 
* React에서 UI를 쉽게 작성하기 위해 사용한다

역할

* JSX 코드는 내부적으로 JavaScript 코드로 변환된다 
* React는 이를 createElement() 함수 형태로 변환한다

장점

* 코드가 간결해진다
* 가독성이 향상된다
* Injection Attack을 방어할 수 있다 

사용법

* HTML과 JavaScript를 함께 작성한다
* JavaScript 코드는 중괄호 {}로 표현한다 

---

## React

* 사용자 인터페이스(UI)를 만들기 위한 JavaScript 라이브러리이다
* 컴포넌트(Component) 기반 구조를 사용한다

특징

* 재사용 가능한 컴포넌트 구조
* Virtual DOM을 사용하여 성능 최적화
* SPA 개발에 적합하다

---

## 렌더링(Rendering)

* 데이터를 기반으로 화면(UI)을 생성하고 표시하는 과정이다

React에서의 렌더링

* 컴포넌트 → JSX → Virtual DOM → 실제 DOM 반영
* 변경된 부분만 업데이트하여 성능을 향상시킨다

---

## npm, npx, nvm, yarn

### npm (Node Package Manager)

* Node.js의 패키지 관리 도구이다
* 라이브러리 설치 및 관리에 사용한다

### npx

* 패키지를 설치하지 않고 바로 실행할 수 있는 도구이다
* create-react-app 등의 실행에 사용한다

### nvm (Node Version Manager)

* Node.js 버전을 관리하는 도구이다
* 여러 버전을 쉽게 설치 및 변경할 수 있다

### yarn

* npm과 같은 패키지 관리 도구이다
* 속도가 빠르고 안정적이다

---

## index.html, index.js, App.js 관계

구조 흐름

```
index.html → index.js → App.js
```

### index.html

* 웹 페이지의 기본 구조를 담당한다
* <div id="root"></div>가 존재한다  
* React가 이 부분에 렌더링된다

### index.js

* React 앱의 시작점(Entry Point)이다
* App 컴포넌트를 root에 렌더링한다 

역할

* ReactDOM.createRoot() 사용
* App을 화면에 출력

### App.js

* 실제 UI를 구성하는 핵심 컴포넌트이다
* 여러 컴포넌트를 포함하는 부모 역할을 한다

---

## 전체 흐름 정리

```
사용자 요청
   ↓
React 컴포넌트 실행
   ↓
JSX 생성
   ↓
Virtual DOM 생성
   ↓
실제 DOM 업데이트
   ↓
브라우저 화면 출력
```
