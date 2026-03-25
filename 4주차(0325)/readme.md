03React_Element Pdf 내용

# Rendering Element
* 글자로 된 html문서를 브라우저에서 랜더링 할 때의 이야기
* Element가 무엇인지
  React에서 Element는 UI의 가장 작은 단위이며, 화면에 표시될 내용을 담고 있는 JavaScript 객체입니다.
  Element는 HTML의 요소와 비슷하지만, 실제 DOM 요소가 아닌 가상 DOM(Virtual DOM)에 존재하는 객체입니다.

## dom에 있는 각각의 노드는 html 태그라는 것

# Element 생성
* JSX
  const element = <div>Hello, world!</div>;
* React.createElement()
  const element = React.createElement('div', null, 'Hello, world!');

# Component
* Element를 생성하고 관리하는 함수 또는 클래스입니다.
* Component는 재사용 가능하며, 독립적인 기능을 수행하는 UI의 특정 부분을 나타냅니다.
* class 컴포넌트와 funtion 컴포넌트란 무엇인가

# Element vs Component
* pdf에 둘 비교한 표 확인 할 것.
* Element는 UI의 가장 작은 단위이며, Component는 이러한 Element들을 묶어 재사용 가능한 UI 모듈을 만듭니다.

# React elements are immutable
* Element 생성 후 children이나 attributes를 변경할 수 없습니다.
* Element 자체를 수정하는 것이 아니라 새로운 Element를 만들어야 합니다

* render()를 호출하면 React는 이전 Element와 새로운 Element를 비교하여 변경된 부분만 실제 DOM에 업데이트한다.

# Rendering
1. 초기 렌더링:
   리액트 애플리케이션이 처음 실행되면, 컴포넌트가 렌더링되고 가상 DOM이 생성됩니다.
   이 가상 DOM은 실제 DOM에 반영되기 전에 메모리 내에서 구성됩니다.
   Virtual DOM을 생성하고, 이를 기반으로 실제 DOM을 만들어 브라우저에 렌더링됩니다.
2. 상태 변화:
   컴포넌트의 상태(state)나 속성(props)이 변경되면, 리액트는 해당 컴포넌트를 다시 렌더링하여 새로운 가상 DOM을 생성합니다.
3. 비교(디프):
   리액트는 이전 가상 DOM과 새로운 가상 DOM을 비교하여 어떤 부분이 변경되었는지를 확인합니다.
   이 과정을 "디프(Diffing)"라고 합니다.
   이 과정에서 리액트는 변경된 부분만을 찾아내어 실제 DOM에 최소한의 변경을 적용합니다.
4. 업데이트:
   변경된 부분이 확인되면, 리액트는 실제 DOM을 업데이트합니다. 이때, 필요한 경우에만 DOM 조작을 수행하여 성능을 최적화합니다.

# React DOM Node
* React 애플리케이션의 시작점 역할
* 
