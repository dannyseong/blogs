---
title: Cross-site Request Forgery Attack and Prevention in Laravel
tag: [blade, laravel, templating, csrf]
sidebar_label: '7. Cross-site Request Forgery Attack'
aidebar_position: 7
---
## Cross-site Request Forgery Attack
Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. [Owasp.org]

Once a user is logged in to a website (e.g. bank) from a browser, further requests sent by that browser do not need to be authenticated again.
- Requests sent by the a different tab of the same browser also don’t need to be authenticated again.

A CSRF attack make use of this fact, and executes a malicious request (e.g. transfer $1M to the attacker’s account) while the user is logged in.
- These requests are usually executed by a different tab (or pop up).

The malicious request is from the attacker, and not generated from the site of origin (e.g. the bank’s web page), hence the name **Cross Site Request Forgery**.

:::info
Here is a more animated explanation of CSRF: [CSRF or XSRF](https://www.youtube.com/watch?v=m0EHlfTgGUU)
:::

### To conduct CSRF attack, the attacker needs to:
#### 1. Know the format of the request. Easy!
#### 2. Trick the user to execute the malicious request while logged in. Harder!

### To trick the user, some social engineering is needed. E.g.:
#### 1. The attacker sold a small item to the user (victim).
#### 2. The user needs to pay the attacker (seller) via online banking.
#### 3. The attacker emailed the user instruction saying “transfer money via online banking to account XXXXXXXX, then immediately, click on this link to inform me the transfer is done”.
#### 4. Embedded in this link is the request to transfer $1M to the attacker. If the user has not logged out of his/her online banking before clicking on the link, then this malicious request will be executed.

## CSRF Prevention in Laravel
Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious website, email, or program causes a user's web browser to perform an unwanted action on a trusted site **on which the user is authenticated**.

In Laravel, a popular PHP web framework, prevention against CSRF is taken very seriously. Here's a more detailed explanation of the process:

### CSRF Token Generation
Laravel automatically generates a CSRF "token" for each active user session. **This token is a unique and random string of characters** that's used to verify that the requests made to the server come from the authenticated user, and not from a malicious third-party.

### Including CSRF Token in Forms
When defining an HTML form in a Laravel application, you must include a hidden CSRF token field. This can be done by using one of the two Blade directives provided:

`{{ csrf_field() }}` or `@csrf`

These commands add the CSRF token as a hidden input field in the HTML form.

### Request Verification
When a form is submitted, Laravel's middleware automatically checks the CSRF token in the request against the token stored in the user's session. If they don't match, the request is rejected, and an error is returned.

Since a malicious attacker wouldn't know the CSRF token for the user's session, any forged request would not have a valid token and thus would be denied.

### Example
Here's an example to clarify:
```php 
<form action="/profile" method="POST">
    @csrf
    <!-- Other form fields go here -->
    <button type="submit">Update Profile</button>
</form>
```
- In this code snippet, the `@csrf` directive inserts the CSRF token into the form. When the user submits the form, Laravel will check the token in the request against the one in the session.

As a result, by using CSRF tokens, Laravel provides an effective way to protect against CSRF attacks. This ensures that all requests to modify data are made by the authenticated and authorized user, adding an essential layer of security to your Laravel applications.