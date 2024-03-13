# ParkInsight - Permits Service

# Running the Environment
1) Run Docker Engine.
2) Set up the Dev Environment (https://github.com/yourparkingspace/pi-dev-environment)
3) Clone this repository
4) Navigate to root
5) Copy the .env.example and create a new .env file (`cp .env.example .env`)
6) `composer update`
7) `./vendor/bin/sail build`
8) `./vendor/bin/sail up -d`
9) `./vendor/bin/sail composer require mongodb/laravel-mongodb`
10) `./vendor/bin/sail up artisan migrate`
11) Navigate to http://127.0.0.1:9999/

> [!NOTE]
> if you run into issues running `composer update` initially, remove `mongodb/laravel-mongodb` from the `composer.json` file
