# Managerium_Cypress
step-1 Create a folder for your project 
step-2 Create Another folder into that folder
step-3 go to CMD from that folder
step-4 run command npm init
       if npm don't work then, run yarn init
       if yarn not installed then run npm install --global yarn
step-5 Then run code . it will take you into VS code screen 
step-6 here you can see a package.json file 
       go to that file and add this line 
      "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "cy:run": "cypress run"
       },
step-7 Go to CMD and run npm install cypress --save-dev 
       for yarn run yarn add cypress
step-8 It will install cupress on your project then you can run your project by 
       run this command npx cypress open , yarn start
