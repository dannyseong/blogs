---
title: How does PHP work
tags: [php]
sidebar_label: '1. How does PHP work'
sidebar_position: 1
---
- When a client requests a PHP file, the `Web Server` will redirect the requesets to the `PHP Engine`.
- The `PHP engine` will then run the `PHP script` and return `any output` from the script to the `Web Server`, which will then return it to the `browser`.

![PHP Work Flow](/img/php/4.png)

## Need to install PHP engine separately?

Yes, in order to process PHP scripts on a web server, you need to have the PHP engine installed on that server. The PHP engine is the software that interprets and executes PHP code. It's responsible for parsing the PHP scripts, executing the instructions within them, and generating dynamic content that can be sent to the client's browser.

Here's the general process for getting the PHP engine up and running on a server:

1. **Install PHP**: You need to install the PHP engine on the server computer. Most web servers offer easy ways to install PHP as an extension or module. There are also standalone installations available.

2. **Configure Web Server**: Once PHP is installed, you need to configure your web server to work with PHP. This involves telling the web server how to handle PHP files (files with a .php extension) and directing requests for PHP files to the PHP engine for processing.

3. **Test PHP Setup**: After installation and configuration, it's a good idea to test your PHP setup to ensure that PHP scripts are being processed correctly. You can create a simple PHP script, place it on your server, and access it through a web browser to see if it generates the expected output.

It's important to note that different web servers (such as Apache, Nginx, IIS) have slightly different procedures for installing and configuring PHP. Also, some hosting providers might have PHP pre-installed and configured on their servers, so you wouldn't need to install it manually.

To Learn how to install PHP env: [Link](https://mikemadison.net/blog/2020/7/21/setting-up-a-new-macbook-pro-for-local-development)
