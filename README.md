# Laravel Template

### Environment Setup
1) Run Docker Engine.
2) Clone this repository
3) Navigate to root
4) Copy the .env.example and create a new .env file (`cp .env.example .env`)
5) `composer update`
6) `docker-compose build`
7) `docker-compose up -d`
8) `docker-compose exec web php artisan migrate:fresh --seed`
9) `docker-compose exec web npm install`
10) `docker-compose exec web npm run dev`

11) A user with email **hello@halfshellstudios.co.uk** / **password** will be seeded to the database.
12) Navigate to http://127.0.0.1:8008/

**Additional**
- Any routing issues (i.e clockwork), run `docker-compose exec web php artisan route:clear`
- Rename the github folder to .github

### Composer Scripts
Common tooling is bundled behind Composer scripts for quick access:

- `composer tests` &mdash; run the full automated test suite.
- `composer standards:check` &mdash; execute `phpcs`, `phpmd`, `phpstan`, and a Rector dry-run.
- `composer standards:fix` &mdash; apply automated code-style fixes via `phpcbf` and Rector.
- Individual checks are also exposed (`composer phpcs`, `composer phpstan`, `composer rector`, etc.).

You can run these locally or inside the container, e.g. `docker-compose exec web composer standards:check`.

### Laravel Pint
This template comes bundled with Laravel Pint.
https://laravel.com/docs/12.x/pint

**To run**
`docker-compose exec web ./vendor/bin/pint`

**To run against a specific folder**
i.e for **app/Models** `docker-compose exec web ./vendor/bin/pint app/Models`

### Laravel Jetstream
This template comes bundled with Laravel Jetstream by default (Livewire).
https://jetstream.laravel.com/introduction.html

**Install Jetstream With Livewire**
`docker-compose exec web php artisan jetstream:install livewire --dark`

**Or, Install Jetstream With Inertia**
`docker-compose exec web php artisan jetstream:install inertia --dark`

### Database Access
Connect with any SQL client (TablePlus, DataGrip, MySQL Workbench, psql, etc.) using the credentials defined in your `.env` file. By default the Sail stack exposes:

- **Host:** `127.0.0.1`
- **MySQL Port:** `3306`
- **Database:** value of `DB_DATABASE` (default `laravel`)
- **Username:** value of `DB_USERNAME` (default `sail`)
- **Password:** value of `DB_PASSWORD` (default `password`)

#### GUI tools (e.g. TablePlus)
1. Install the client (TablePlus is available at [tableplus.com](https://tableplus.com/)).
2. Create a new **MySQL** connection.
3. Enter the host, port, database, username, and password listed above (or customised values from `.env`).
4. Save and connect to browse tables, manage data, and run queries.

#### Command line
```
docker-compose exec mysql mysql -u"$DB_USERNAME" -p"$DB_PASSWORD" "$DB_DATABASE"
```

Swap `mysql` for `psql` if you enable the bundled PostgreSQL service.

### Tests
`docker-compose exec web php artisan test`

