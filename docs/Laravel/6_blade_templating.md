---
title: Blade Template for Laravel
tag: [blade, laravel, templating]
sidebar_label: '6. Blade Template for Laravel'
aidebar_position: 6
---

## Blade Templates

### File Extension
- Blade files end with `*.blade.php`.
- Calling `view('hello)` will first search for `hello.blade.php`. If not found, it looks for `hello.php`.

### Syntax
- **Outputting Variables**: Use `{{ $name }}` to display a variable. This will also automatically escape variables through PHP's `htmlentities()` function to prevent XSS attackes.
- **Unescaped Content**: Use `{!! $name !!}` if you want the content to remain unescaped.

### Example: Greeting Form

```php title="resources/views/greeting_form.blade.php"
<!DOCTYPE html> 
<html>
<head>
  <title>Greeting Form</title> <meta charset="utf-8">
</head> 
<body>
  <form action="greeting" method="post"> 
    // highlight-next-line
    {{ csrf_field() }}
    First name:<br>
      // highlight-next-line
    <input type="text" name="name"><br> 
    Age:<br>
      // highlight-next-line
    <input type="text" name="age"><br><br> 
    <input type="submit" value="Submit">
  </form> 
</body>
</html>
```
- **Form Action**: Specifies the URI (`greeting`) to handle form submission.
- **CSRF Protection**: ``{{ csrf_field() }}`` or ``@csrf`` is used to guard against CSRF attacks.
- **Input Names**: Take note of the name attributes (`name` and `age`), as they will be used to retrieve the data.


```php title="routes/web.php"
Route::get('/', function() {
  return view('greeting_form'); 
  });

Route::post('greeting', function() {
  $name = request('name');
  $age = request('age');
  return view('greeting')->with('name', $name)->with('age', $age + 1);
});
```
- Two routes are defined: `/` for displaying the form and `greeting` for processing the submission.

:::caution
URLs do not include the `.php` extension.
:::
- URLs do not include the .php extension.
- `request()` function is used to access `GET` and `POST` variables.

```php title="resources/views/greeting.blade.php"
<!DOCTYPE html>
<html>
  <head> 
    <title>Greeting</title> 
    <meta charset="utf-8">
  </head> 
  <body>
    <p>
      Hello {{ $name }}.
      Next year, you will be {{ $age }} years old.
    </p>
  </body> 
</html>
```

## Blade Syntax

### Comments
```php
{{-- --}}
```
- The advantage of using Blade comments is that they are not visible in the HTML source.
- They may span multiple lines. 
  
### Flow Control
- Blade supports flow control constructs such as `if`, `for`, `foreach`, and `while`, but with a simpler and more readable syntax.

```php title="If statements"
@if (condition) 
@elseif (condition) 
@else
@endif
```
- The condition can be any PHP expression.
- A comparison between PHP and Blade. 
  1. PHP version:
  ```php
  <?php if (!empty($error)) { ?>
    <p class="alert">
      <?= $error ?>
    </p>
  <?php } ?>
  ```
  2. Blade version:
  ```php
  @if (!empty($error))
    <p class="alert">{{ $error }}</p>
  @endif
  ```
### Foreach loop
```php
@foreach (array as variable) 
@endforeach
```
```php
@forelse (array as variable) 
@empty
@endforelse
```
- Operates the same as PHP foreach
- `@forelse` will execute the `@empty` block if the array is empty and can be used to show a special message when no results are found.

- Use forelse loop to print elements in the $names array:
```php
<!DOCTYPE html> 
<html>
...
  <body> 
    <ul>
      @forelse ($names as $name) 
        <li> {{$name}}
      @empty
        No names
      @endforelse
    </ul> 
  </body>
</html>
```

### For loop
- Blade also supports a basic for loop, which is identical to PHP. E.g:
```php
@for ($i = 1; $i <= 5; $i++) 
  {{ $i }}
@endfor
```

### Example: foreach and if

```php title="routes/web.php"
Route::get('foreach', function(){
  //highlight-next-line
  return view('foreach')->with('get', request()->all());
});
```
- `$request->all()` returns all of the URL parameters in a map, we will place it in a variable in view called `$get`.

```php title="resources/views/foreach.blade.php(1 of 2)"
<!DOCTYPE html> 
<html>
<head>
  <meta charset="utf-8">
  <title>Foreach loop example</title>
  //highlight-next-line
  <link rel="stylesheet" href=“{{asset(‘css/app.css’)}}" type="text/css">
</head>
...
```
- `asset()` will generate the URL to the public directory (with http protocol), and append the parameter to the path.
- `secure_asset()` does the same as `asset()`, except that the URL is generated with https.
- If a page is loaded with **https**, some browsers will not allow CSS/JavaScript to be retrieved via **http**, so **the use of secure_asset() is required**.


```php title="resources/views/foreach.blade.php(2 of 2)"
...
<body>
  <table class="bordered">
  <!-- table header --> 
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr> 
    @forelse ($get as $name => $value)
      //highlight-next-line
      @if ($loop->index % 2 == 0)
        <tr class='alternate'>
          <td>{{ $name }}:</td>
          <td>{{$value}}</td>
        </tr>
      @else
        <tr>
          <td>{{$name}}:</td>
          <td>{{ $value }}</td>
        </tr>
      @endif 
    @empty
      <tr>
        <td colspan=2>No URL variables</td>
      </tr>
    @endforelse
  </table> 
</body>
</html>
```
:::tip
Blade provide a `$loop` variable inside the loop. This variable provides access to some useful bits of information such as the current loop index and whether this is the first ($loop->first) or last ($loop->last) iteration through the loop.
:::

## Template Inheritance

Web pages often contain common code, for example the header information which links stylesheets, Javascript, and metadata, is often the same across pages. In addition, page structure is often the same throughout a website, with a similar header, navigation, and footer.

Template inheritance allows a ‘layout’ or ‘parent’ template to be defined which describes the common elements of each web page. 'Sub' or 'child' templates can then define the elements which are specific to each page.

### Blade Template Inheritance
- Blade refers to 'super' or 'parent' templates as layouts.
- Place layouts in the `views/layouts` subdirectory.
- Use the `@yield` keyword in layouts to indicate a section that is to be overwritten by a child template.
- Child templates indicate the parent template they will extend using the `@extends` keyword
- Child templates define the contents of a `@yield section` using the `@section` keyword
- End an @section with `@endsection`.

### Example: Greeting Form with Template Inheritance
#### 1. The following shows a layout for the greeting example: 
```php title="views/layouts/master.blade.php"
<!DOCTYPE html> 
<html>
  <head>
  //highlight-next-line
    <title>@yield('title')</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href=“{{asset(‘css/app.css’)}}">
  </head>
  <body>
    <h1> Greetings user</h1>
    //highlight-next-line
    @yield('content')
  </body>
</html>
```
#### 2. The following is a child template version of the greeting example:
```php title="views/greetingForm.blade.php"
@extends('layouts.master')

@section('title')
  Greeting Form
@endsection

@section('content')
  <body>
      <form action="greeting" method="post">
          {{ csrf_field() }}
          First name:<br>
          <input type="text" name="name"><br>
          Age:<br>
          <input type="text" name="age"><br><br>
          <input type="submit" value="Submit">
      </form>
  </body>
@endsection
```

```php title="views/greeting.blade.php"
@extends('layouts.master') 
@section('title')
  Greeting
@endsection

@section('name')
  {{$name}}
@endsection

@section('content')
  <p>
    Hello {{ $name }}.
    Next year, you will be {{ $age }} years old.
  </p>
@endsection
```
:::note
- The content between `@section` and `@endsection` will replace the corresponding `@yield` in the parent template.
- `@section('name’)` is used in the default content example in the next slide.
:::

#### 3. Default Content in Layout
It is also possible to place default content in the parent which can be optionally overridden by a child template:
```php title="views/layouts/master.blade.php"
<!DOCTYPE html> 
<html>
  <head>
    <title>@yield('title')</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="{{asset(‘css/app.css’)}}">
  </head>
<body>
  //highlight-next-line
  <h1> Greetings @section('name') user @show</h1> 
  @yield('content')
</body> 
</html>
```
:::note
- If data is sent to the parent layout, it will show the data otherwise it will show `user` which is default value.
- `@show` is required in the parent, not `@endsection`
:::

#### 4. Including Files
- Subviews can be included using the @include keyword: `@include('view.name')`
- This is useful in breaking up large a web page (that has distinct sections) into smaller files. E.g. we want to add a footer into the Greeting Application.
```php title="views/layouts/greetingFooter.blade.php"
<div><hr>This Greeting App is brought to you by Greeting Inc.</div>
```
- We can include the footer in the layout: 
```php title="views/layouts/master.blade.php"
<!DOCTYPE html> 
<html>
.... 
<body>
  <h1> Greeting Application</h1> 
  @yield('content') 
  //highlight-next-line
  @include('layouts.greetingFooter')
</body> 
</html>
```

## Blade Components
`Components` and `slots` provide similar benefits to sections, layouts, and includes. Using components requires you to think differently! There are two approaches to writing components: 
- class based components and 
- anonymous components

### Class-based components
To create a class-based component use the `make:component` Artisan command. In our Greeting example, we will make the layout in `master.blade.php` into a component.

We need to execute the command: `php artisan make:component Master`
Two files will be created:
- The view component file in `resources/views/components/m aster.blade.php`
- The component class in `app/View/Components/Master.php`

```php title="resources/views/components/master.blade.php"
<!DOCTYPE html>
<html>
<head>
  //highlight-next-line
  <title>{{$title ?? 'Greeting'}}</title>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
</head>
<body>
  <h1>Greeting {{$name}}</h1> 
  //highlight-next-line
  {{$slot}} 
  //highlight-next-line
  <x-greetingFooter/>
</body> </html>
```
- `{{$slot}}`, `{{$name}}`, and `{{$title}}` are data that are passed into `master.blade.php` by the view that uses this component.
- `<x-greetingFooter/>` is component that is used by master.blade.php.

### Using a component
We will make use of our component master.blade.php. To utilise a component, use the tag x- followed by the name of the component,
e.g. `<x-master>`
```php title="views/greetingForm.blade.php"
<x-master name="user">
  <x-slot name="title">
    Greeting Component - Form
  </x-slot>
  <form method="post" action="greeting">
    {{csrf_field()}}
    <table>
      <tr><td>Your name:</td> <td><input type="text" name="name"></td></tr>
      <tr><td>Your age:</td> <td><input type="text" name="age"></td></tr>
      <tr><td colspan=2><input type="submit" value="Submit"></td></tr> 
      </table>
  </form>
</x-master>
```
### Passing data into a component
- Content that are injected into a component will be supplied to the default `$slot` variable, unless the content is within `<x-slot>`.
  * In our example, the form will be injected into the component in the variable `$slot`.
- x-slot is used to defined **named slot**. The content within x-slot will be injected into a component in a specific variable (name).
  * In our example, the content defined within `<x-slot name="title">` will
be inject into the component in the variable `$title`.
- Data can also be passed into a component via the component object by adding
properties to the component’s tag.
  * In our example, `<x-master name="user">` passes the string “user” to the Master component object.
- Data passed into the component object will appear in the component object’s constructor. To make use of this data, we need to define a class **property**, and store the data in that property.

```php title="App/Views/Components/Master.php"
namespace App\View\Components;
use Illuminate\View\Component;

class Master extends Component {
  public $name;
  public function __construct($name) {
    $this->name = $name;
  }
  public function render(){
    return view('components.master'); 
  }
}
```
- Most the of above code is automatically generated by the artisan command to create the component. The text in bold is added later on to store the data that is passed in.
- The component has direct access to the public properties of the component object, i.e. in `resources/views/components/master.blade.php` we can directly refer to `$name`.
- To pass data stored in a variable to a component via the component’s object, a “:” is needed in the tag’s attribute.

```php title="views/greeting.blade.php"
<x-master :name="$user">
  <x-slot name="title"> 
    Greeting Component
  </x-slot>
    <p>
    Hello {{ $user }}.
    Next year, you will be {{ $age }} years old.
</x-master>
```
- In the above code, we are passing the variable in $user to `resources/views/components/master.blade.php`.

### Anonymous component
- Anonymous components do not have the associated component class.
- The create an anonymous component, simply create a blade file under resources/views/components. Laravel will automatically scan the components directory for any new component files.
```php title="views/components/greetingFooter.blade.php"
<div><hr>This Greeting App is brought to you by Greeting Inc.</div>
```

- The above component is used in master.blade.php via the line: `<x- greetingFooter/>`