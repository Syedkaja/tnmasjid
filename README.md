# tnmasjid
TN Masjid Base Application

## Initial Setup

1.Clone the repo in local machine

2.Create a seperate python3 virtual environment.

3.Activate virtual environment and install required packages listed in requirements.txt

4.Kindly do install nodemodules required for front end inside the app/ folder with the any of the following method.

## install npm packages using yarn or npm

npm install --save
or
yarn

## Build the app for development run
1.Navigate to the project directory and execute the following command to run back end server.
python main.py

2.Navigate to the static/ directory inside the project directory and execute the following command in terminal to build and run the front end server in development mode.
ng serve

3.Now You can access the application in chrome browser localhost:4200/

## Stop Application in development mode

1.Navigate to the terminal window which is executing python main.py and press ctrl+c to stop back end.
2.Navigate to the terminal window which is executing ng serve and press ctrl+c to stop front end.

## Debugging

1.If python main.py not running application with the error port is already in use, please check all the terminal windows weather any instance is running or not.

2.If no other process is running and still you got the port busy error please check the running process with ps -ef | grep python and look for the process. If process exists, please kill the process by kill -9 pid. now you can run the application with same method stated above.

