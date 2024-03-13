# ParkInsight - Permits Service

# Running the Environment
1) Run Docker Engine.
2) Set up the Dev Environment (https://github.com/yourparkingspace/pi-dev-environment)
3) Clone this repository
4) Navigate to root
5) Copy the .env.example and create a new .env file (`cp .env.example .env`)
6) `./vendor/bin/sail build`
7) `./vendor/bin/sail up -d`
8) `./vendor/bin/sail up composer update`
9) `./vendor/bin/sail up artisan migrate`
10) Navigate to http://127.0.0.1:9999/
