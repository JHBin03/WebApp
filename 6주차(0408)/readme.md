
## server와 browser와 JS, Client 관계
* server에 접속하는 프로그램이 browser.
* Client(브라우저)가 요청하고
* Server가 처리해서 응답하며
* JavaScript는 브라우저 안에서 동작하며 둘 사이를 연결한다

## PHP ASP JSP JS
* PHP / ASP / JSP = 서버에서 HTML을 만들어주는 기술
* JS = 브라우저에서 화면을 동적으로 바꾸는 언어
* PHP / ASP / JSP는 서버 측에서 실행되고(Server-side), JS는 기본적으로 클라이언트 측에서 실행된다(Client-side)

## html을 만드는 것은 html component로 만든다.
function class의 한계 -> function component로 변경되었다.

# Programming05 pdf 내용
* 주로 component의 상태(state)에 대해 나온다.

## State
* state는 화면을 바꾸는 변수?
* **state는 컴포넌트의 내부에서 변경 가능한 데이터를 다루기 위해 사용하는 객체이다.**
* component 안에 const, let 등을 이용해서 변수를 만들 수 있다.
* 부모로부터 props 변수를 받을 수 있다. 하지만 값을 변경할 수 없다.
* component 안에는 state도 존재하는데 state는 값을 변경 할 수 있다. 변경 시 화면 변경이 된다.
* 보통 이벤트와 함께 사용된다.
* 리액트에서의 state는 리액트 component의 상태를 의미한다.
* 객체 값이 바뀌면 화면도 자동으로 바뀐다.
 
pdf 21페이지 class component까지.
