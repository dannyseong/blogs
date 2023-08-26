# What is the Global Object in Node.js
The global object refers to the unique top-level object of all objects and is commonly known as 'window' in the browser-side and 'global' in Server-side (Node.js).

```javascript
// in browser console
this === window // true

// in Terminal
node
this === global // true
```
- The global object is created before entering the **execution context** and does not have a constructor, so it cannot be newly created using the new operator. In other words, developers cannot create the global object themselves.
- The global object possesses the global scope.
- When using child objects of the global object, the name of **the global object can be omitted**. For example, the document object is a child object of the global object window, so it can be expressed as window.document..., but generally, the name of the global object is omitted.
```javascript
document.getElementById('foo').style.display = 'none';
// window.document.getElementById('foo').style.display = 'none';
```
- However, in cases where user-defined variables clash with the names of child objects of the global object, you can explicitly specify the global object to avoid confusion.
```
function moveTo(url) {
  var location = {'href':'move to '};
  alert(location.href + url);
  // location.href = url;
  window.location.href = url;
}
moveTo('http://www.google.com');
```
- The global object holds global variables as its properties. In other words, global variables are properties of the global object.
```
var ga = 'Global variable';
console.log(ga);
console.log(window.ga);
```
- Functions declared in the global scope can also be accessed as properties of the global object. In other words, global functions are methods of the global object.
```
function foo() {
  console.log('invoked!');
}
window.foo();
```
- Standard built-in objects are indeed child objects of the global object. When using child objects of the global object, the name of the global object can be omitted. Therefore, for standard built-in objects, the specification of the global object can also be omitted.
```
// window.alert('Hello world!');
alert('Hello world!');
```
## Global properties
Global properties refer to the properties of the global object. They are used to represent values that are used throughout the entire application. Global properties are usually simple values and do not have other properties or methods associated with them.
1. Infinity
2. NaN
3. undefined
### Global functions
Global functions are functions that can be called from anywhere in the application since they act as methods of the global object.
1. eval()
2. isFinite()
3. isNaN()
4. parseFloat()
5. parseInt()
6. encodeURI() / decodeURI()
![URI](https://poiemaweb.com/img/uri.png)
7. encodeURIComponent() / decodeURIComponent()



