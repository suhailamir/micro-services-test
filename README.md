# micro-services-test
A test project built using micro services, to read a sample csv file.

#Make sure node.js & npm is installed on your machine.

# To run service
node server.js

# To run test
 npm test

 It will print the contents of public/test.csv file to console.

# To consume the service via HTTP type following command in terminal.

 curl -d '{"role":"read-csv","cmd":"return-json"}' http://localhost:10203/act

It will print the contents of public/test.csv file to console. 

