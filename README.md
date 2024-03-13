# ParkInsight - Permits Service

# Running the Environment
1) Set up the Dev Environment (https://github.com/yourparkingspace/pi-dev-environment)
2) Clone this repository
3) Navigate to root
4) Copy the .env.example and create a new .env file (`cp .env.example .env`)
5) `./vendor/bin/sail build`
6) `./vendor/bin/sail up -d`
7) `./vendor/bin/sail up composer update`
8) `./vendor/bin/sail up artisan migrate`
9) Navigate to http://127.0.0.1:9999/
