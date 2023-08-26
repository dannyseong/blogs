# Node.js란 무엇인가? 공부 포인트?
## JS Engine History
~ 1995: HTML, CSS
1995 ~ : 많은 브라우저들이 JS Engine을 탑재하기 시작함.
## The kind of JS Engine 
- Safari: JavaScript Core
- IE: Chakara
- Firefox: SpiderMonkey
- Chrome: V8 - Just In Time compliation
## What is Node.js
In 2009, Ryan Dahl create node.js to utilise JavaScript outside of Browser.
- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js is an open-source, cross-platform, back-end **JavaScript runtime environment** that runs on the V8 engine and executes JavaScript code outside a web browser.

1. Browser Study Sequence
- Browser위에서 동작을 하고 싶으면 브라우저에서 제공하는 WebAPIs를 이용해야 하기 때문에, 종류/ 사용방법/ 사용 환경 등에 대한 숙지가 필요하다.
- 프론트엔드 지식
- 기본기를 쌓은 다음 프레임 워크 공부

2. Node.js Study Sequence
- Node.js 환경에서 제공하는 API를 기준으로 (1) 어떤것들이 있는지? (2) 어떻게 활용해서 컴퓨터에 있는 파일에 접근해서 읽고/쓰고 할 수 있는지? (3) 어떻게 서버로 동작할 수 있는지 기본적은 NodeAPI를 익혀야한다.
- 백엔드 지식
- 기본기 샇은 다음 프레임워크 공부: Express, Nest

# Beneficial point to study in Node.js (Why Node.js)
1. JavaScript everywhere: Easy entry into backend development
   - By using one programming language, developer can do the work for client and server at the same time. Efficiency and productivity increase.
   - Easy to prototyping
2. 50% of the developers use Node.js
3. Big Corporates use Node.js : Netflix, LinkedIn, Uber, Ebay etc
   - Strong communities
   - Proven Productio Quality
   - Many tooling with many functionalities
4. Easy, Simple yet Powerful and flexible
5. Strong Communities
   - npm(node package manager): numerous libraries, reusable templates


# 4 Characteristics of Node.js
1. JavaScript Runtime
   - V8 JS Engine is developed by C++
2. Single Thread
   - Process = Code + Stack + Heap + Data
   - Process = A couple of threads (Thread #1, Thread #2, Thread #3...)
   - Oposite: Multithreading
3. I/O Non-Blocking
   - Blocking = synchronous
   - Non-Blocking = asynchronous : Not waiting for the precedented task.
4. Event-Driven
   - Callback is called when event has occurred.


