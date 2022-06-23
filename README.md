# Blockchain Node React

I have build a Node.js API that will use Web3.js to interact with and retrieve data from the blockchain network, then send it back to the user on the browser app using React.
> Project demonstrates how to develop a nodejs server as a middleware to make ordinary browsers possible to interact with smart contracts without using any third party plugins or extensions such as Metamask.



![Workflow](https://user-images.githubusercontent.com/22578296/175229808-eebbe049-ab2f-464d-bd28-c326c6dbc39a.png)


# Project Setup
```
git clone https://github.com/Parasgr7/blockchain-node-react.git
cd blockchain-node-react
```
**Getting started**

To begin our project, we need to set up **Ganache and Truffle**, which allow us to work with smart contracts.
First, download Truffle from its official website, then install it with the command below:

```
npm i truffle -g
```
To install **Ganache**, you can follow along with the official documentation[https://trufflesuite.com/ganache/] and open the application.


**Truffle Migration**
```
cd blockchain-node-api
truffle migrate
```

**Start Mongodb service** 
Install and Run MongoDB by Downloading it Manually (https://treehouse.github.io/installation-guides/mac/mongo-mac.html)
```
~/mongodb/bin/mongod
```

**Node Server**
```
cd blockchain-node-api
npm install
nodemon server
```

**React Server**
```
npm install
npm start
```
