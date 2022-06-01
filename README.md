# MYSqL with sequelize and express validation 

## Project Description

In this project I am trying to make Crud opration using sequelize and also, using express validation to put validation with some custom validation.

## Installation
If you are using git bash just copy above command into your bash project will be clone in your directory.
```bash
git clone https://github.com/shivam20yadav/Mysql-sequelize.git
```
## Usage
 After the download or clone just open command prompt or if using vscode goto the vs code terminal and copy and past below command it will be run code
  ```bash
  npm run start
  ```
  now click in this [link](http://127.0.0.1:300)
  
 
## routes
  ### user routes
  This route help to get all user data
```bash
  http://127.0.0.1:3000/user/getuser
  ```
   This route help to add user into the database
```bash
  http://127.0.0.1:3000/user/adduser
  ```
  This route help to update user (after slash put username)
```bash
  http://127.0.0.1:3000/user/updateuser/
  ```
  This route help to delete user from the database (after slash put username)
```bash
  http://127.0.0.1:3000/user/deleteuser/
  ```
  
  ### train routes
  This train route help to get all train data
```bash
  http://127.0.0.1:3000/train/gettrain
  ```
   This route help to add train into the database
```bash
  http://127.0.0.1:3000/train/addtrain
  ```
  This route help to update train (after slash put train number)
```bash
  http://127.0.0.1:3000/train/updatetrain/
  ```
  This route help to delete train from the database (after slash put train number)
```bash
  http://127.0.0.1:3000/train/deletetrain/
  ```
  ### station routes
  This train route help to get all station data
```bash
  http://127.0.0.1:3000/station/getstation
  ```
   This route help to add station into the database
```bash
  http://127.0.0.1:3000/station/addstation
  ```
  This route help to update station (after slash put station name)
```bash
  http://127.0.0.1:3000/station/updatestation/
  ```
  This route help to delete station from the database (after slash put station name)
```bash
  http://127.0.0.1:3000/station/deletestation/
  
