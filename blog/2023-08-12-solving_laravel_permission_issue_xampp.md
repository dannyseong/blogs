---
authors: danny
title: Solving Laravel Permissions Issue on XAMPP with macOS
tag: [laravel, xampp, macOS]
---

### Introduction

If you're working with Laravel on XAMPP in macOS, you may encounter a permissions issue preventing Laravel from writing to the necessary directories. This can result in an error like:

```plaintext
The stream or file "path/to/laravel.log" could not be opened in append mode: Failed to open stream: Permission denied
This guide will help you diagnose and fix this problem.
```

### Step 1: Navigate to Your Laravel Project Directory

Open Terminal and navigate to your Laravel project's root directory:

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/my-app
```

### Step 2: Identify the Apache User and Group

On macOS using XAMPP, the Apache User and Group are typically set to daemon. You can verify this in the Apache configuration file.

### Step 3: Change Ownership of Required Directories

You need to change the ownership of the storage and bootstrap/cache directories to the Apache user (daemon):

```bash
sudo chown -R daemon:daemon storage
sudo chown -R daemon:daemon bootstrap/cache
```

### Step 4: Set the Appropriate Permissions

Next, set the write permissions for these directories:

```bash
sudo chmod -R 775 storage
sudo chmod -R 775 bootstrap/cache
```

### Step 5: Restart XAMPP

Restart XAMPP to apply the changes:

```bash
sudo /Applications/XAMPP/xamppfiles/xampp restart
```

### Conclusion

After completing these steps, your Laravel application should run without any permissions issues on XAMPP with macOS. If you continue to encounter problems, additional system logs or error messages may be required to diagnose the issue further.
