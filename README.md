# machinetranslation-MALAS

##Architecture:##
 Node JS send data to Lamafunction (azure function). Lama Function save data in cosmos DB 
 Python code retrieve data from Cosmos DB to be processed for machine translation in seerver with GPU 
 Web is deveoped by using Node Js and deployed in firebase
 SQL_Python is developed in Python
 Lama_function is developed in C# to connect website to cosmos DB

###live code ###
https://llama-malas-1da6d.web.app/translate

## Setup ##
In order to redeploy this setup you will need to do a few things
* Setup a Google Firebase and deploy
* Setup a Microsoft Azure account and redeploy the functions
* Add the python scripts for the SCC to a valid directory on the SCC

### Google Firebase Deploy ###
https://firebase.google.com/docs/hosting/quickstart

* First step is to download the repository, easy enough
* Next you will want to set up a firebase account
* Follow the instructions in the quickstart. Note I had to use windows powershell to get it to work correctly
* Once the webpage is deployed you will see the wepage live but will none of the upload will work this is because you have to hook it up to Azure
* I deployed the web folder since I thought it made the most sense and was the easiest

### Setup Azure ###
https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-your-first-function-visual-studio?tabs=in-process&pivots=programming-runtime-functions-v3
https://docs.microsoft.com/en-us/azure/cosmos-db/sql/sql-api-get-started

* First you will need visual studio, do not try to do this in another IDE it is pain
* Next setup a Microsoft Azure free account
* Next run through both tutorial to understand the relationship of how the Azure functions work with NodeJS
* Next please go through the tutorial if you did not
* Next copy the code and redeploy the Azure functions in your enviroment
* Dont forget to modify any places in the code where you need to change the api keys
* IMPORTANT: After you have deployed your function make sure you allow the webaddress from the firebase deployment under CORS. This is on the main page of the azure function.
* Dont forget to add your keys and endpoints to https://github.com/goutern/machinetranslation-MALAS/blob/main/web/src/services/data-access.service.ts 
* Also add your key to https://github.com/goutern/machinetranslation-MALAS/blob/main/LamaFunctions/LamaFunctions/DataAccess.cs
* Please reach out if you are stuck on the Azure step. It is honeslty a pain. 

### Setup SCC ###
* Last there are two script that are ment to run on the SCC first on pulls data from Azure second pushes data
* These scripts are easy to manipulate and run
* Currently these scripts fetch all data available from the database so becafeful as it could get expensive quickly

## Questions ##
If you have questions please reach out!
Nicholasgoutermout@gmail.com
goutern@bu.edu

sources 

https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-your-first-function-visual-studio?tabs=in-process&pivots=programming-runtime-functions-v3

https://docs.microsoft.com/en-us/azure/cosmos-db/sql/sql-api-get-started

https://firebase.google.com/docs/hosting/quickstart
