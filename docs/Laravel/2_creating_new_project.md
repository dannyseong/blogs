---
title: Creating Laravel Project
tags: [laravel, php]
sidebar_label: '2. Creating Laravel Project'
sidebar_position: 2
---

Laravel project can be created via using either:

- Laravel installer, or
- Composer Create-Project

## Laravel Installer

- To use Laravel installer, one must first setup the installer. Follow the instructions on the official Laravel webiste to setup the installer :
  - [https://laravel.com/docs](https://laravel.com/docs)
- Installing the Laravel installer requires root access
- Using the Laravel installer, a new Laravel project can be created by the command:
  ```bash
  laravel new project-name
  ```
- This will create a folder with the name of your project. This folder contains the files for the latest version of an empty Laravel project.

## Composer Create-Project

- To install a Laravel project using composer create-project, use the command:
  ```bash
  composer create-project laravel/laravel project-name
  ```
- This will create a folder with the name of your project. This folder contains the files for the latest version of an empty Laravel project.
- If a particular version of Laravel is required, a version number can be specified, e.g. to install version 8 of Laravel:
  ```bash
  composer create-project laravel/laravel=8.* project-name
  ```

## Run Laravel Project

### Step 1: Navigate to Your Project

To get started, use the `cd` command to navigate to your project directory. Assuming your project is named `myapp`, here's how we'd do it:

```bash
$ cd myapp
```

### Step 2: Launch the Built-In Server

Laravel simplifies local development by providing a built-in server. With the following command, you'll start this server and turn your project into a fully functional web application right on your local machine:

```bash
$ php artisan serve
```

The "artisan" command, which is written in PHP, takes various options after "php artisan." By specifying "serve," you initiate the built-in server. Once it's up and running, open your web browser and navigate to:

:::info
Ready to take a break or step away from your project?
It's a breeze. Simply locate the active command prompt and press `Ctrl + C`. This will gracefully stop the ongoing task and return you to the input state. Not only will this halt any ongoing processes, but it will also bring the server program to a stop, allowing you to resume your tasks.
