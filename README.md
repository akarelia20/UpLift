# UpLift - Real time video-call application

![Screenshot 2023-03-05 at 5 29 05 PM](https://user-images.githubusercontent.com/97579245/223000442-96b942ec-406d-45ab-b532-a9838a26572d.png)

## Application flow 

- Copy ID button -> Copies your socket id that you are connect to the clipboard 

- <b>How to make a call ?</b> -  Ask your friend to send you his/her Socket id (they can simply click the "copy ID' button and provide that to you via other apps)
Friend send you his or her Socket ID -> enter that in "id to call" box -> simply make call -> user(reciever) accepts call -> success


## Dependencies
backend -> simpler just with node server

backend dependencies
>> npm install cors express nodemon socket.io
1. cors -> cross origin requests
2. Express -> recived http requests
3. nodemon -> refreshes server 
4. soket.io -> allow us to make real time data changes

Frontend dependencies
>> npm install @material-ui/core @material-ui/icons react-copy-to-clipboard simple-peer socket.io-client(EXPIRED)

>> cd client

>> npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps

>> npm i react-copy-to-clipboard simple-peer socket.io-client

>> npm i @mui/icons-material tss-react


## Setup

- Client - "run npm i & npm start"
-  "npm i & nodemon index.js" for server side to start the development server!
