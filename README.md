# Frisby - API testing

### setup

	- go to project dir and run:

		npm init

	- To get started with Frisby.js, add it to your project as a dev dependency:

    	npm install frisby --save-dev

    - If you don't have Jest installed in your project yet, install it:

        npm install --save-dev jest

    - By default, Jest looks for a folder named __tests__. If it does not exist in your project yet, go ahead and create it:

        mkdir -p __tests__/api
        touch __tests__/api/api_spec.js

    - To run your tests, open a Terminal or console window, and type jest from the root folder of your project:

        ./node_modules/.bin/jest