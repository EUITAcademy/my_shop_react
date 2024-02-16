# Welcome to Shop App!

This is a walkthrough how to set up the backend server. And REST api documentation for test server.
# Set up Backend
### How to Run server.
1. Backend is located at in **backend** folder of the project.
2. To run backend you need to have Node.js installed on the computer. In order to run npm commands. Install node: https://nodejs.org/en
3. After that open terminal and go to **backend** folder. In terminal:
 `cd /Users/jack/Projects/shop_app_flutter/backend` 
 next run server with `node app.js`.
 4. Now server is running, to quit server use ***control + C***. To run again use `node app.js`.

## Backend api

### Change localhost to local ip address
You can test local server on your computer. Test Server runs on *localhost:8080*. 

## REST API

Base url of server is `http://localhost:8080` 

#### SignIn
**Method**: POST
**Endpoint**: `http://localhost:8080/login`
**JsonBody**: `{'email': 'test@test.com', 'password': 'password'}`
**Headers**: none
**Example response**: 

    {
    token: eyhbGciOiJIUzI1NiIsInR5I6IkpXVCJ9.eyJlbWFpbCImYUBhYS5jb0iLCJpYXQiOjE3Dc5ODk4MjsImV4cCITcwNzk5NzAyNX0.5XaXv-sj4X78MybKlHTCNQCkgHG8Pu5IOGW2Jos, 
    exp: 2024-02-15T11:37:05.653Z
    }

#### SignUp
**Method**: POST
**Endpoint**: `http://localhost:8080/signup`
**JsonBody**: `{'email': 'test@test.com', 'password': 'password'}`
**Headers**: none
**Example response**: 

    {
    token: eyhbGciOiJIUzI1NiIsInR5I6IkpXVCJ9.eyJlbWFpbCImYUBhYS5jb0iLCJpYXQiOjE3Dc5ODk4MjsImV4cCITcwNzk5NzAyNX0.5XaXv-sj4X78MybKlHTCNQCkgHG8Pu5IOGW2Jos, 
    exp: 2024-02-15T11:37:05.653Z
    }

#### Get products
**Method**: GET
**Endpoint**: `http://localhost:8080/products`
**JsonBody**: none
**Headers**: `{'Authorization': 'Bearer your_token'},`
**Example response**: 

    [  
        {  
            "id": "random_id_1",  
      "title": "Boots man",  
      "subtitle": "Black Elegant Boots",  
      "imageUrl": "http://193.172.21.17:8080/boots_men.jpeg",  
      "price": 109.99  
      },  
      {  
            "id": "random_id_2",  
      "title": "Hat",  
      "subtitle": "Mans elegant brown hat",  
      "imageUrl": "http://193.172.21.17:8080/hat.jpeg",  
      "price": 119.99  
      },
    ...

####  Order
**Method**: POST
**Endpoint**: `http://localhost:8080/order`
**JsonBody**:

     {'order': [  
            {  
                "id": "random_id_1",  
          "title": "Boots man",  
          "subtitle": "Black Elegant Boots",  
          "imageUrl": "http://193.172.21.17:8080/boots_men.jpeg",  
          "price": 109.99  
          },]
          }

**Headers**: `{'Authorization': 'Bearer your_token'},`
**Example response**: 

     {'message': 'Order placed successfully!'}

