# cypress-calculator

cypress based test automation platform for performing UI based functional checks. 

### Tech stack used in building the framework 
##### Programming language used: javascript
##### Test framework : Cypress version 9.2.0
##### IDE : VS Code

#### Prerequisite 1
##### nodejs should be installed on the system.To check if node is available on the system, go to command prompt and type node -version.It should display: 
    
e.g v14.15.1 (my current version)
#### Prerequisite 2 --> Cypress should be installed on the system using npm install cypress --save-dev
#### Prerequisite 3 --> Docker up and running
#### Prerequisite 4 (not mandatory)

##### git should be configured on the system to pull the project from github. 

If github is not configured on the system, then project can be downloaded using the option "Download ZIP" from https://github.com/rohitbahadur/cypress-calculator/tree/master


#### Installation (using git, assumption is a repo created on github )
1. If using git,create a project folder on your local machine.
2. From the git repo click on Clone or download option and copy the link. 
2. Go to command prompt and navigate to the project and folder and type git clone "copy the link" 
(copy the link is the link copied from git repo).


#### Installation (without git)
1. There is no additional settings or configurations required. The 
   project can be downloaded using git or option "Download ZIP" from 
   https://github.com/rohitbahadur/cypress-calculator/tree/master
2. unzip (if downloaded as a ZIP) the project folder and open in eclipse 
    (File-->Open Projects from File System ). Select the directory where 
    the project folder is available.



#### Project Design Strategy
#### The project has a action based principles.
1. Fixtures --> to fetch data. eg. the url.
2. Integration folder --> This is the main folder where the tests are placed.
3. All the test commands are moved inside "KUELAP-->cypress-->support/Command.js" file
4. reporting--> mochawesome is used as a test reporting plugin ("KUELAP-->cypress-->reports). Everytime the test is run, the test status is updated with new date/time. 

#### Tests.
1. Addition of two numbers
2. Subtraction of two numbers
3. Multiplication of two numbers
4. Division of two numbers
5. Division of any number by zero
  
#### For executing the tests, navigate to the project. We have two options to run the tests:

1. Visual based --> npm run cypress:open--> click on calculation.spec.js 
2. cmd line based --> npm run cypress-run
3. docker command to run the tests docker build -t "nameOfBuild" -f "nameOfDockerFile" . (ensure that this command is run from inside the folder)
