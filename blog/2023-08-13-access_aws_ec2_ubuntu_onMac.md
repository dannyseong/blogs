---
authors: danny
title: How to Purchase and Remotely Access AWS EC2 Ubuntu from a Mac
tag: [laravel, xampp, macOS]
---

## Purchase an AWS Server
### 1. Purchase an EC2 Server
You can define the configuration of the server (computer) you want with just a click and install the operating system (OS) required to run that computer. From now on, we'll install Linux's Ubuntu as the OS. Like Windows, there are several types of OS, and Linux is one of them.
#### (1) Visit the AWS EC2 Console Page
  [EC2 Console Page](https://ap-northeast-2.console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2)
#### (2)  Click the Launch Instance button on the Instance tab
  ![Lanuch Instance](/img/aws/1.png)
#### (3) Name your Instance
  ![Name of Instance](/img/aws/2.png)
#### (4) Click the Ubuntu card in the Quick Start tab, then choose the free Ubuntu Server.
  ![Select Ubuntu](/img/aws/3.png)
#### (5)  Create a `Key pair` for remote access. The encryption file is a `.pem` extension file, so download it and store it in a safe place.
  ![Key Pair setting](/img/aws/4.png)
#### (6) Open the settings to allow SSH for remote access, and HTTPS and HTTP ports for communication.
  ![Network Setting](/img/aws/5.png)
#### (7)  Request to create an Instance, then verify the creation on the Dashboard.
  ![Dashboard](/img/aws/6.png)
:::tip
  If you want to temporarily stop the Instance, or turn off the server, press the stop button in the Instance on the Dashboard.
  ![Stop Instance](/img/aws/7.png)
:::

### 2. Connecting to EC2 remotely
- SSH (Secure Shell Protocol): A communication protocol used to connect to another computer, and it's relatively more secure than other protocols. Also, the SSH port must be open on the computer you are connecting to, so you'll need to open port 22 in AWS EC2 security.
- Mac has ssh, so you can directly access it via the command line!

#### (1) Open Terminal: enter "terminal" in Spotlight
#### (2) Change access permissions for the Key pair received when creating the EC2 Instance
```bash
sudo chmod 400 [Key_pair_path]
```
#### (3) Connect via SSH
```bash
ssh -i [Key_pair_path] ubuntu@[AWS_Instance_IP_adress]
```
:::tip
- Windows
  1. Open `gitbash`
  2. Enter `ssh -i [Key_pair_path] ubuntu@[AWS_Instance_IP_adress]`
:::

:::note
When you want to stop ssh connection, enter `exit` in the console.
:::