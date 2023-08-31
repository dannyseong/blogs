"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/08/27/sanitization","metadata":{"permalink":"/blog/2023/08/27/sanitization","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-27-sanitization.md","source":"@site/blog/2023-08-27-sanitization.md","title":"Sanitisation: Its Significance and Real-World Implementation\\n","description":"Why is Sanitisation Important?","date":"2023-08-27T00:00:00.000Z","formattedDate":"August 27, 2023","tags":[],"readingTime":1.79,"hasTruncateMarker":false,"authors":[{"name":"Daehoon Seong","title":"Developers & Electrical Engineer","url":"https://github.com/dannyseong","imageURL":"https://avatars.githubusercontent.com/u/99000722?v=4","key":"danny"}],"frontMatter":{"authors":"danny","title":"Sanitisation: Its Significance and Real-World Implementation\\n","tag":["web development","sanitization"]},"nextItem":{"title":"Validation: Deeper Dive and Practical Application\\n","permalink":"/blog/2023/08/26/validation"}},"content":"## Why is Sanitisation Important?\\n\\n1. **Security**: Sanitisation combats numerous potential vulnerabilities, especially injections attacks like SQL injection and Cross-Site Scripting (XSS). By ensuring input is safe before processing, we can mitigate these risks.\\n2. **Data Consistency**: Sanitisation ensures that the data adheres to expected formats, guaranteeing that it doesn\'t break application logic or cause unforeseen issues.\\n3. **User Experience (UX)**: Sanitisation can help autocorrect user inputs, like removing extraneous spaces in email addresses, leading to a better user experience.\\n4. **Resource Efficiency**: Properly sanitised data can prevent faulty operations, reducing unnecessary strain on servers and databases.\\n\\n## Where Should Sanitisation Occur?\\n\\n1. **Client-Side Sanitisation**: Useful for enhancing user experience by immediately correcting or formatting input. However, remember that like client-side validation, sanitisation at this level can be bypassed or tampered with.\\n\\n```jsx\\nfunction sanitiseEmail(email) {\\n  return email.trim().toLowerCase();\\n}\\n\\nconst userEmail = sanitiseEmail(\'   ExAMple@EmAIL.CoM   \');\\n```\\n\\n2. **Server-Side Sanitisation**: This is the paramount layer where sanitisation should be enforced. Never trust data coming from the client side without sanitising it on the server.\\n\\n```jsx\\nconst express = require(\'express\');\\nconst app = express();\\n\\napp.post(\'/submit-data\', (req, res) => {\\n  let inputData = req.body.data;\\n\\n  // Simple sanitisation: Removing leading and trailing spaces\\n  inputData = inputData.trim();\\n\\n  // Further processing of the sanitised data...\\n  res.send(\'Data processed successfully!\');\\n});\\n```\\n\\n## Best Practices:\\n\\n1. **Sanitise Before Storing**: Before saving any data to your database, ensure it\'s sanitised to prevent potential vulnerabilities.\\n2. **Use Established Libraries**: Whenever possible, leverage well-maintained libraries for sanitisation, like DOMPurify for sanitising HTML or validator.js for strings.\\n3. **Escape Data**: If you\'re outputting data into HTML, JavaScript, or any other context, make sure to escape it to prevent XSS attacks.\\n4. **Stay Vigilant and Updated**: New vulnerabilities emerge continuously, so always keep abreast of the latest threats and adjust your sanitisation strategies accordingly.\\n\\n## Conclusion\\n\\nSanitisation is the unsung hero safeguarding our systems from potentially malicious or just malformed data. Paired with validation, sanitisation offers a robust defence mechanism, ensuring both the security and integrity of our applications. By understanding and implementing sanitisation correctly, developers can shield systems from a myriad of vulnerabilities and provide a more seamless user experience."},{"id":"/2023/08/26/validation","metadata":{"permalink":"/blog/2023/08/26/validation","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-26-validation.md","source":"@site/blog/2023-08-26-validation.md","title":"Validation: Deeper Dive and Practical Application\\n","description":"Why is Validation Important?","date":"2023-08-26T00:00:00.000Z","formattedDate":"August 26, 2023","tags":[],"readingTime":1.895,"hasTruncateMarker":false,"authors":[{"name":"Daehoon Seong","title":"Developers & Electrical Engineer","url":"https://github.com/dannyseong","imageURL":"https://avatars.githubusercontent.com/u/99000722?v=4","key":"danny"}],"frontMatter":{"authors":"danny","title":"Validation: Deeper Dive and Practical Application\\n","tag":["web development","validation"]},"prevItem":{"title":"Sanitisation: Its Significance and Real-World Implementation\\n","permalink":"/blog/2023/08/27/sanitization"},"nextItem":{"title":"Allow one call function: Deep dive into Closure\\n","permalink":"/blog/2023/08/25/allow-one-call-func copy"}},"content":"## Why is Validation Important?\\n\\n1. **Data Integrity**: To ensure that data stored in databases is accurate and reliable. Incorrect data can lead to faulty operations, miscalculations, and even compromise a system\'s integrity.\\n2. **Security**: Validation can prevent malicious attacks, such as SQL injection, where attackers try to insert malicious code or data into a system.\\n3. **User Experience (UX)**: On the client side, validation can provide immediate feedback to users, correcting them before they submit a form, leading to a smoother UX.\\n4. **Efficiency**: Preventing bad data from being sent in the first place reduces the need for error handling once it reaches its destination. This can speed up system operations and reduce the chances of crashes or other problems.\\n\\n## Where Should Vialidation Occur?\\n\\n1. **Client-Side Validation**: This is the first line of defence. It\'s done on the user\'s browser using JavaScript or other client-side scripting languages. While it improves user experience by providing instant feedback, it shouldn\'t be relied upon for security or data integrity since a malicious user can bypass or alter client-side scripts.\\n\\n   ```jsx\\n   function validateEmail(email) {\\n     var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,6}$/;\\n     return regex.test(email);\\n   }\\n\\n   if (!validateEmail(\'example@email.com\')) {\\n     alert(\'Invalid email address.\');\\n   }\\n   ```\\n\\n2. **Server-Side Validation**: This is the most crucial level of validation. Data must always be validated on the server because we can\'t trust the integrity of client-side validation alone. This ensures data integrity and security.\\n\\n   ```jsx\\n   const express = require(\'express\');\\n   const app = express();\\n\\n   app.post(\'/submit-data\', (req, res) => {\\n     const inputData = req.body.data;\\n\\n     // Simple validation check\\n     if (!inputData || inputData.length < 5) {\\n       return res.status(400).send(\'Data is invalid!\');\\n     }\\n\\n     // Process the valid data...\\n     res.send(\'Data processed successfully!\');\\n   });\\n   ```\\n\\n## Best Practices:\\n\\n1. **Always Perform Server-Side Validation**: As mentioned, even if client-side validation is in place, always validate data on the server.\\n2. **Feedback**: Provide clear feedback to the user when validation fails. Inform them of what went wrong and how they can correct it.\\n3. **Layered Approach**: Implement multiple layers of validation for maximum security and efficiency.\\n4. **Stay Updated**: As technology and techniques evolve, ensure that validation methods are updated accordingly.\\n\\n## Conclusion\\n\\nValidation is a crucial aspect of any system that handles data. By understanding its importance and implementing it correctly, developers can create secure, efficient, and user-friendly systems."},{"id":"/2023/08/25/allow-one-call-func copy","metadata":{"permalink":"/blog/2023/08/25/allow-one-call-func copy","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-25-allow-one-call-func copy.md","source":"@site/blog/2023-08-25-allow-one-call-func copy.md","title":"Allow one call function: Deep dive into Closure\\n","description":"Problem","date":"2023-08-25T00:00:00.000Z","formattedDate":"August 25, 2023","tags":[],"readingTime":0.65,"hasTruncateMarker":false,"authors":[{"name":"Daehoon Seong","title":"Developers & Electrical Engineer","url":"https://github.com/dannyseong","imageURL":"https://avatars.githubusercontent.com/u/99000722?v=4","key":"danny"}],"frontMatter":{"authors":"danny","title":"Allow one call function: Deep dive into Closure\\n","tag":["javascript","algorithm","closure"]},"prevItem":{"title":"Validation: Deeper Dive and Practical Application\\n","permalink":"/blog/2023/08/26/validation"},"nextItem":{"title":"Understanding the Compose Function in JavaScript\\n","permalink":"/blog/2023/08/22/compose-function"}},"content":"## Problem\\n\\nGiven a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.\\n\\n- The first time the returned function is called, it should return the same result as fn.\\n- Every subsequent time it is called, it should return undefined.\\n\\n## Answer\\n\\n```js\\nvar once = function (fn) {\\n  let flag = false;\\n  return function (...args) {\\n    if (!flag) {\\n      flag = true;\\n      return fn(...args);\\n    } else {\\n      return undefined;\\n    }\\n  };\\n};\\n```\\n\\n## Takeaways\\n\\n- The key idea behind this problem is to use a closure to store the state of the returned function.\\n- By doing this, we can keep track of whether the function has been called before and behave accordingly."},{"id":"/2023/08/22/compose-function","metadata":{"permalink":"/blog/2023/08/22/compose-function","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-22-compose-function.md","source":"@site/blog/2023-08-22-compose-function.md","title":"Understanding the Compose Function in JavaScript\\n","description":"In functional programming, composing functions is a powerful concept that allows the creation of new functions by combining multiple functions together. The compose function in JavaScript takes an array of functions and returns a new function that applies these functions from left to right on an input. Let\'s explore how this works in detail.","date":"2023-08-22T00:00:00.000Z","formattedDate":"August 22, 2023","tags":[],"readingTime":2.29,"hasTruncateMarker":false,"authors":[{"name":"Daehoon Seong","title":"Developers & Electrical Engineer","url":"https://github.com/dannyseong","imageURL":"https://avatars.githubusercontent.com/u/99000722?v=4","key":"danny"}],"frontMatter":{"authors":"danny","title":"Understanding the Compose Function in JavaScript\\n","tag":["javascript","algorithm","compose"]},"prevItem":{"title":"Allow one call function: Deep dive into Closure\\n","permalink":"/blog/2023/08/25/allow-one-call-func copy"},"nextItem":{"title":"How to Purchase and Remotely Access AWS EC2 Ubuntu from a Mac","permalink":"/blog/2023/08/13/access_aws_ec2_ubuntu_onMac"}},"content":"In functional programming, composing functions is a powerful concept that allows the creation of new functions by combining multiple functions together. The compose function in JavaScript takes an array of functions and returns a new function that applies these functions from left to right on an input. Let\'s explore how this works in detail.\\n\\n```js\\nvar compose = function (functions) {\\n  if (functions.length === 0) {\\n    return function (x) {\\n      return x;\\n    };\\n  }\\n\\n  return functions.reduceRight(function (prevFn, nextFn) {\\n    return function (x) {\\n      return nextFn(prevFn(x));\\n    };\\n  });\\n};\\n```\\n\\n## Code Breakdown\\n\\n### 1. Identify Function\\n\\nIf the input array `functions` is empty, the function returns an identity function:\\n\\n```js\\nif (functions.length === 0) {\\n  return function (x) {\\n    return x;\\n  };\\n}\\n```\\n\\nThe simply returns the input `x` unchanged.\\n\\n### 2. Composing Functions\\n\\nIf the array is not empty, the `reduceRight` method is used:\\n\\n```js\\nreturn functions.reduceRight(function (prevFn, nextFn) {\\n  return function (x) {\\n    return nextFn(prevFn(x));\\n  };\\n});\\n```\\n\\nHere\'s how it works:\\n\\n1. **Starting from the end**: Since `reduceRight` goes from the end of the array to the beginning, it starts with the last function.\\n2. `Composing step-by-step`: In each step, it takes the current function (nextFn) and the composition of the previous functions (prevFn), and combines them into a new function.\\n3. `Final Result`: The final result is a new function that applies all the functions in the functions array from left to right to an input x.\\n\\n## Example\\n\\nLet\'s take a closer look at how compose([f, g, h]) would be evaluated with the above compose function. We\'ll break down each step:\\n\\n### Start\\n\\n`reduceRight` begins at the last element of the array, which is `h`. At this stage, `prevFn` is assigned `h`, and `nextFn` is assigned `g`.\\n\\n### First Step\\n\\nA new function is created. This function takes an input `x` and calculates `g(h(x))`. The reason `g` is applied after `h` is due to the right-to-left evaluation of reduceRight.\\n\\n### Second Step\\n\\nNow, `prevFn` is the function that calculates `g(h(x))`, and `nextFn` is assigned `f`. A new function is again created, and this function takes an input `x` and calculates `f(g(h(x)))`.\\n\\n### Conclusion\\n\\nAll functions have now been processed, and the final result is a new function that calculates `f(g(h(x)))`. If you pass an input value to this composed function, it will apply f, g, and h to that input in sequence.\\n\\nThe `compose` function is a fascinating construct that leverages the power of functional programming. By understanding how it builds a chain of function calls, you can use it to create more modular and maintainable code. Whether you\'re working with a series of transformations, validations, or any other sequential operations, `compose` helps you structure them in a clean and understandable way."},{"id":"/2023/08/13/access_aws_ec2_ubuntu_onMac","metadata":{"permalink":"/blog/2023/08/13/access_aws_ec2_ubuntu_onMac","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-13-access_aws_ec2_ubuntu_onMac.md","source":"@site/blog/2023-08-13-access_aws_ec2_ubuntu_onMac.md","title":"How to Purchase and Remotely Access AWS EC2 Ubuntu from a Mac","description":"Purchase an AWS Server","date":"2023-08-13T00:00:00.000Z","formattedDate":"August 13, 2023","tags":[],"readingTime":1.69,"hasTruncateMarker":false,"authors":[{"name":"Daehoon Seong","title":"Developers & Electrical Engineer","url":"https://github.com/dannyseong","imageURL":"https://avatars.githubusercontent.com/u/99000722?v=4","key":"danny"}],"frontMatter":{"authors":"danny","title":"How to Purchase and Remotely Access AWS EC2 Ubuntu from a Mac","tag":["laravel","xampp","macOS"]},"prevItem":{"title":"Understanding the Compose Function in JavaScript\\n","permalink":"/blog/2023/08/22/compose-function"},"nextItem":{"title":"Getting Started with PHP | Preparing the Server | Let\'s Get PHP Scripts Moving!","permalink":"/blog/2023/08/12/getting-started-php"}},"content":"## Purchase an AWS Server\\n### 1. Purchase an EC2 Server\\nYou can define the configuration of the server (computer) you want with just a click and install the operating system (OS) required to run that computer. From now on, we\'ll install Linux\'s Ubuntu as the OS. Like Windows, there are several types of OS, and Linux is one of them.\\n#### (1) Visit the AWS EC2 Console Page\\n  [EC2 Console Page](https://ap-northeast-2.console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2)\\n#### (2)  Click the Launch Instance button on the Instance tab\\n  ![Lanuch Instance](/img/aws/1.png)\\n#### (3) Name your Instance\\n  ![Name of Instance](/img/aws/2.png)\\n#### (4) Click the Ubuntu card in the Quick Start tab, then choose the free Ubuntu Server.\\n  ![Select Ubuntu](/img/aws/3.png)\\n#### (5)  Create a `Key pair` for remote access. The encryption file is a `.pem` extension file, so download it and store it in a safe place.\\n  ![Key Pair setting](/img/aws/4.png)\\n#### (6) Open the settings to allow SSH for remote access, and HTTPS and HTTP ports for communication.\\n  ![Network Setting](/img/aws/5.png)\\n#### (7)  Request to create an Instance, then verify the creation on the Dashboard.\\n  ![Dashboard](/img/aws/6.png)\\n:::tip\\n  If you want to temporarily stop the Instance, or turn off the server, press the stop button in the Instance on the Dashboard.\\n  ![Stop Instance](/img/aws/7.png)\\n:::\\n\\n### 2. Connecting to EC2 remotely\\n- SSH (Secure Shell Protocol): A communication protocol used to connect to another computer, and it\'s relatively more secure than other protocols. Also, the SSH port must be open on the computer you are connecting to, so you\'ll need to open port 22 in AWS EC2 security.\\n- Mac has ssh, so you can directly access it via the command line!\\n\\n#### (1) Open Terminal: enter \\"terminal\\" in Spotlight\\n#### (2) Change access permissions for the Key pair received when creating the EC2 Instance\\n```bash\\nsudo chmod 400 [Key_pair_path]\\n```\\n#### (3) Connect via SSH\\n```bash\\nssh -i [Key_pair_path] ubuntu@[AWS_Instance_IP_adress]\\n```\\n:::tip\\n- Windows\\n  1. Open `gitbash`\\n  2. Enter `ssh -i [Key_pair_path] ubuntu@[AWS_Instance_IP_adress]`\\n:::\\n\\n:::note\\nWhen you want to stop ssh connection, enter `exit` in the console.\\n:::"},{"id":"/2023/08/12/getting-started-php","metadata":{"permalink":"/blog/2023/08/12/getting-started-php","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-12-getting-started-php.md","source":"@site/blog/2023-08-12-getting-started-php.md","title":"Getting Started with PHP | Preparing the Server | Let\'s Get PHP Scripts Moving!","description":"Let\'s dive right into using PHP. To utilize a PHP program, all you have to do is save the PHP file in the Web server\'s public directory.","date":"2023-08-12T00:00:00.000Z","formattedDate":"August 12, 2023","tags":[],"readingTime":2.065,"hasTruncateMarker":false,"authors":[{"name":"Daehoon Seong","title":"Developers & Electrical Engineer","url":"https://github.com/dannyseong","imageURL":"https://avatars.githubusercontent.com/u/99000722?v=4","key":"danny"}],"frontMatter":{"authors":"danny","title":"Getting Started with PHP | Preparing the Server | Let\'s Get PHP Scripts Moving!","tag":["php","WEB","xampp"]},"prevItem":{"title":"How to Purchase and Remotely Access AWS EC2 Ubuntu from a Mac","permalink":"/blog/2023/08/13/access_aws_ec2_ubuntu_onMac"},"nextItem":{"title":"Solving Laravel Permissions Issue on XAMPP with macOS","permalink":"/blog/2023/08/12/solving_laravel_permission_issue_xampp"}},"content":"Let\'s dive right into using PHP. To utilize a PHP program, all you have to do is save the PHP file in the Web server\'s public directory.\\n\\nOpen the XAMPP folder (typically located in the \\"xampp\\" folder on the `Application` folder) and find the `htdocs` folder inside. <U>This folder is XAMPP\'s Web server\'s public directory.</U> You can place HTML and PHP files here and access them from a browser.\\n\\nCreate a folder called `sample` and inside it, make a text file named `index.php` Write the following source code in this file:\\n\\n```html title=\\"index.php\\"\\n<!DOCTYPE html>\\n<html lang=\\"en\\">\\n  <head>\\n    <meta http-equiv=\\"Content-Type\\" content=\\"text/html; charset=UTF-8\\" />\\n    <title>sample page</title>\\n  </head>\\n  <body>\\n    <h1>Hello PHP!</h1>\\n    <div>\\n      <?php echo \\"Text displayed by PHP.\\"; ?>\\n    </div>\\n  </body>\\n</html>\\n```\\n\\nSet the text encoding to \u201cUTF-8\\". From here on, all content will use UTF-8. When using PHP, the file extension must be `.php` although other extensions can be used. `.php` is the default.\\n\\nOnce written, access `http://localhost/sample/index.php` from your web browser. You can also omit the final index.php (it\'s called by default). You should see \\"Hello PHP!\\" as the title and \\"Text displayed by PHP.\\" underneath. The text below is executed by the PHP script.\\n\\nAs you can see from the source code, even though it\'s a `.php` extension, the content is fundamentally no different from standard HTML. PHP\'s main feature is that you can **_\\"mix it with HTML code.\\"_** So, you don\'t have to write everything in PHP. You can create the screen layout entirely in HTML, then add PHP where needed.\\n\\nYou\'ll notice a peculiar tag within the HTML tags:\\n\\n```php\\n<?php echo \\"Text displayed by PHP.\\"; ?>\\n```\\n\\nThis is where you write PHP scripts. PHP scripts are written using the `<?php ... ?>` tag. Write the actions to be performed inside this tag, and they\'ll be executed by the server and sent to the browser. Since PHP scripts are executed on the server, they won\'t show up in the browser at all. This is a significant difference from JavaScript, which runs in the browser.\\n\\nHere, the `echo` function is used. In PHP, most essential functions are prepared this way. The echo function is executed like this:\\n\\n```php\\necho output_value;\\n```\\n\\n:::note\\nNote the semicolon (;) at the end. PHP requires a semicolon at the end of every statement. PHP doesn\'t use line breaks to separate statements but semicolons. This way, you can break a long statement across lines appropriately. Be sure to use semicolons correctly to avoid errors."},{"id":"/2023/08/12/solving_laravel_permission_issue_xampp","metadata":{"permalink":"/blog/2023/08/12/solving_laravel_permission_issue_xampp","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-12-solving_laravel_permission_issue_xampp.md","source":"@site/blog/2023-08-12-solving_laravel_permission_issue_xampp.md","title":"Solving Laravel Permissions Issue on XAMPP with macOS","description":"Introduction","date":"2023-08-12T00:00:00.000Z","formattedDate":"August 12, 2023","tags":[],"readingTime":1.18,"hasTruncateMarker":false,"authors":[{"name":"Daehoon Seong","title":"Developers & Electrical Engineer","url":"https://github.com/dannyseong","imageURL":"https://avatars.githubusercontent.com/u/99000722?v=4","key":"danny"}],"frontMatter":{"authors":"danny","title":"Solving Laravel Permissions Issue on XAMPP with macOS","tag":["laravel","xampp","macOS"]},"prevItem":{"title":"Getting Started with PHP | Preparing the Server | Let\'s Get PHP Scripts Moving!","permalink":"/blog/2023/08/12/getting-started-php"}},"content":"### Introduction\\n\\nIf you\'re working with Laravel on XAMPP in macOS, you may encounter a permissions issue preventing Laravel from writing to the necessary directories. This can result in an error like:\\n\\n```plaintext\\nThe stream or file \\"path/to/laravel.log\\" could not be opened in append mode: Failed to open stream: Permission denied\\nThis guide will help you diagnose and fix this problem.\\n```\\n\\n### Step 1: Navigate to Your Laravel Project Directory\\n\\nOpen Terminal and navigate to your Laravel project\'s root directory:\\n\\n```bash\\ncd /Applications/XAMPP/xamppfiles/htdocs/my-app\\n```\\n\\n### Step 2: Identify the Apache User and Group\\n\\nOn macOS using XAMPP, the Apache User and Group are typically set to daemon. You can verify this in the Apache configuration file.\\n\\n### Step 3: Change Ownership of Required Directories\\n\\nYou need to change the ownership of the storage and bootstrap/cache directories to the Apache user (daemon):\\n\\n```bash\\nsudo chown -R daemon:daemon storage\\nsudo chown -R daemon:daemon bootstrap/cache\\n```\\n\\n### Step 4: Set the Appropriate Permissions\\n\\nNext, set the write permissions for these directories:\\n\\n```bash\\nsudo chmod -R 775 storage\\nsudo chmod -R 775 bootstrap/cache\\n```\\n\\n### Step 5: Restart XAMPP\\n\\nRestart XAMPP to apply the changes:\\n\\n```bash\\nsudo /Applications/XAMPP/xamppfiles/xampp restart\\n```\\n\\n### Conclusion\\n\\nAfter completing these steps, your Laravel application should run without any permissions issues on XAMPP with macOS. If you continue to encounter problems, additional system logs or error messages may be required to diagnose the issue further."}]}')}}]);