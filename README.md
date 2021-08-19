# mvc-webpack-npm
This project is a practice/test with an ASP .NET MVC project that uses the webpack module bundler and minifier with Node Package Manager (NPM).

## Features
- It is build on .NET platform. Take advantage of the ASP MVC environment and improves the administration of the client's libraries with npm and webpack.
- Uses npm as client side package manager.
- Uses webpack to bundle and minify the client side files.
- The csproj is fully configured to automate the task of build and bundle the client side files. Also it has a configuration for publish or deploy with the client packages.
- The webpack bundler has files to configure common bundling logic, and logic per environment.

## Requirements to build
- .NET 5 on your computer.
- NodeJs and npm (it is available with NodeJs download).

### Build the project.
If you have the basic requirements for the project you only build the ASP .NET MVC project, it automatically verify if you have NodeJs installed, and then executes the **npm install** command and makes the first bundle for development environment executing the **npm run build-dev** command that refers to one of the scripts in the **package.json** file to execute the webpack bundler.

Also if you want to do manually you can go to the **ClientApp** directory of the MVC project and execute the **npm install** command in the CLI and later the **npm run build-dev** (or build-prod for production) command to bundle client side files.
