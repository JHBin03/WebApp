# 1. HTML (HyperText Markup Language)
- HTML은 웹 페이지의 구조를 정의하기 위해 사용하는 마크업 언어이다.
- 웹 문서의 뼈대를 구성하며, 텍스트, 이미지, 링크 등의 콘텐츠 구조를 표현한다.
- HTML 문서는 태그(tag)를 이용하여 요소(element)를 정의하는 방식으로 작성한다.

---

# 2. Markup Language와 Metadata

## Markup Language
- 문서나 데이터를 구조화하고 서식을 지정하기 위한 언어이다.
- 태그(tag)나 특정 문법을 사용하여 문서의 구조와 표현 방식을 정의한다.
- 웹 페이지 구조를 정의하는 HTML, 데이터 구조 표현을 위한 XML 등이 대표적인 예이다.

## Metadata
- 데이터 자체가 아니라 데이터를 설명하는 정보이다.
- 데이터의 속성, 의미, 관계 등을 설명한다.
- 일반적으로 key-value 형태로 표현된다.

## 차이점
- Markup Language는 문서의 구조와 표현을 정의한다.
- Metadata는 데이터에 대한 설명 정보를 제공한다.
- Markup Language 내부에 Metadata가 포함될 수 있다.

---

# 3. HTML 표준

HTML은 여러 기관에서 표준을 관리하고 있다.

## W3C (World Wide Web Consortium)
- 웹 표준을 제정하는 국제 기관이다.
- HTML 공식 명세(specification)를 제공한다.

## MDN Web Docs
- HTML 태그 설명, 예제, 브라우저 지원 정보를 제공하는 개발자 문서이다.
- HTML 학습 자료로 널리 사용된다.

## WHATWG
- HTML Living Standard을 유지하며 HTML의 지속적인 발전을 담당한다.
- 최신 HTML 표준을 관리한다.

---

# 4. Emmet

- HTML과 CSS 코드를 빠르게 작성하기 위한 코드 자동 완성 도구이다.
- 짧은 문법을 입력하면 자동으로 HTML 구조를 확장하여 생성한다.
- VS Code, Sublime Text, Atom 등의 코드 편집기에서 사용된다.
- 개발자의 코드 작성 속도를 크게 향상시킨다.

---

# 5. MPA와 SPA

웹 애플리케이션은 페이지 구성 방식에 따라 MPA와 SPA로 나눌 수 있다.

## MPA (Multi Page Application)
- 여러 개의 HTML 페이지로 구성되는 방식이다.
- 페이지 이동 시마다 서버에 요청을 보내고 새로운 HTML을 로드한다.
- 페이지 이동 시 전체 페이지가 다시 렌더링된다.

특징
- 구조가 단순하다
- SEO에 유리하다
- 페이지 이동 시 로딩이 발생한다

## SPA (Single Page Application)
- 하나의 HTML 페이지에서 동적으로 콘텐츠를 변경하는 방식이다.
- AJAX 요청을 통해 필요한 데이터만 서버에서 받아온다.
- 페이지 전체를 새로 로드하지 않고 화면 일부만 업데이트한다.

특징
- 사용자 경험이 부드럽다
- 초기 로딩이 상대적으로 크다
- JavaScript 의존도가 높다

---

# 6. CSS (Cascading Style Sheets)

- 웹 페이지의 디자인과 레이아웃을 담당하는 스타일 시트 언어이다.
- HTML이 구조를 담당한다면 CSS는 시각적 표현을 담당한다.

CSS의 역할
- 글자 색상, 크기, 폰트 설정
- 레이아웃 구성
- 반응형 디자인 구현
- 페이지 스타일 관리

---

# 7. Node.js

Node.js는 JavaScript를 브라우저 외부 환경에서도 실행할 수 있도록 하는 런타임 환경이다.

특징
- JavaScript를 서버 환경에서 실행할 수 있다
- V8 엔진 기반으로 동작한다
- 서버 프로그램, CLI 도구 등 다양한 용도로 사용 가능하다

## Node.js의 개념적 위치
Node.js는 다음과 같은 특징을 가진다.

- 운영체제(OS)가 아니다
- 플랫폼(platform)이라기보다 실행 환경(environment)에 가깝다
- 특정 개발 구조나 아키텍처를 강제하지 않는다

## Java JRE와의 비교
- JRE는 Java 프로그램 실행 환경이다
- Node.js는 JavaScript 실행 환경이다
- 둘 모두 OS 위에서 동작하는 런타임 환경이다

---

# 8. Platform, Environment, Framework, Runtime

소프트웨어 개발에서 자주 사용되는 개념이다.

## Platform
- 소프트웨어가 실행되는 기반 환경이다.
- 예: Windows, Linux, macOS

## Environment
- 프로그램이 실행될 수 있도록 구성된 환경이다.
- 예: 개발 환경, 테스트 환경, 운영 환경

## Framework
- 소프트웨어 개발을 위한 구조와 기본 틀이다.
- 예: React, Angular, Vue.js

## Runtime
- 프로그램이 실제로 실행될 때 필요한 환경이다.
- 예: Node.js, Java JRE

---

# 9. IDE (Integrated Development Environment)

IDE는 소프트웨어 개발을 위한 통합 개발 환경이다.

## 주요 기능
- 코드 편집
- 디버깅
- 빌드 자동화
- 버전 관리 연동
- 프로젝트 관리
- 패키지 관리 지원
- 플러그인 확장

---

# 10. 대표적인 IDE 및 코드 편집기

## IDE
- Visual Studio
- IntelliJ IDEA
- PyCharm
- Eclipse
- Android Studio
- Xcode
- NetBeans

## 코드 편집기
- VS Code
- Sublime Text
- Notepad++
- Atom

---

# 11. VS Code

VS Code는 가벼운 코드 편집기이면서 IDE 기능을 제공하는 개발 도구이다.

특징
- 무료 오픈소스
- Windows, macOS, Linux 지원
- 다양한 확장 기능 제공
- 활발한 개발자 커뮤니티 존재
