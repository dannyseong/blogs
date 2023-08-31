---
authors: danny
title: >
  Sanitisation: Its Significance and Real-World Implementation
tag: [web development, sanitization]
---

## Why is Sanitisation Important?

1. **Security**: Sanitisation combats numerous potential vulnerabilities, especially injections attacks like SQL injection and Cross-Site Scripting (XSS). By ensuring input is safe before processing, we can mitigate these risks.
2. **Data Consistency**: Sanitisation ensures that the data adheres to expected formats, guaranteeing that it doesn't break application logic or cause unforeseen issues.
3. **User Experience (UX)**: Sanitisation can help autocorrect user inputs, like removing extraneous spaces in email addresses, leading to a better user experience.
4. **Resource Efficiency**: Properly sanitised data can prevent faulty operations, reducing unnecessary strain on servers and databases.

## Where Should Sanitisation Occur?

1. **Client-Side Sanitisation**: Useful for enhancing user experience by immediately correcting or formatting input. However, remember that like client-side validation, sanitisation at this level can be bypassed or tampered with.

```jsx
function sanitiseEmail(email) {
  return email.trim().toLowerCase();
}

const userEmail = sanitiseEmail('   ExAMple@EmAIL.CoM   ');
```

2. **Server-Side Sanitisation**: This is the paramount layer where sanitisation should be enforced. Never trust data coming from the client side without sanitising it on the server.

```jsx
const express = require('express');
const app = express();

app.post('/submit-data', (req, res) => {
  let inputData = req.body.data;

  // Simple sanitisation: Removing leading and trailing spaces
  inputData = inputData.trim();

  // Further processing of the sanitised data...
  res.send('Data processed successfully!');
});
```

## Best Practices:

1. **Sanitise Before Storing**: Before saving any data to your database, ensure it's sanitised to prevent potential vulnerabilities.
2. **Use Established Libraries**: Whenever possible, leverage well-maintained libraries for sanitisation, like DOMPurify for sanitising HTML or validator.js for strings.
3. **Escape Data**: If you're outputting data into HTML, JavaScript, or any other context, make sure to escape it to prevent XSS attacks.
4. **Stay Vigilant and Updated**: New vulnerabilities emerge continuously, so always keep abreast of the latest threats and adjust your sanitisation strategies accordingly.

## Conclusion

Sanitisation is the unsung hero safeguarding our systems from potentially malicious or just malformed data. Paired with validation, sanitisation offers a robust defence mechanism, ensuring both the security and integrity of our applications. By understanding and implementing sanitisation correctly, developers can shield systems from a myriad of vulnerabilities and provide a more seamless user experience.
