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
10) Ensure Node 20.19+ (or 22.12+) is available locally, then `docker-compose exec web npm install`
11) `docker-compose exec web npm run dev`

12) A user with email **hello@halfshellstudios.co.uk** / **password** will be seeded to the database.
13) Navigate to http://127.0.0.1:8008/

**Additional**
- Any routing issues (i.e clockwork), run `docker-compose exec web php artisan route:clear`
- Rename the github folder to .github

### Composer Scripts
Common tooling is bundled behind Composer scripts for quick access:

- `composer tests` &mdash; run the full automated test suite.
- `composer test:coverage` &mdash; run the Pest suite with code coverage (`XDEBUG_MODE=coverage` required). Append `-- --coverage-html=storage/logs/coverage` to emit an HTML report.
- `composer standards:check` &mdash; execute `phpcs`, `phpmd`, `phpstan`, and a Rector dry-run.
- `composer standards:fix` &mdash; apply automated code-style fixes via `phpcbf` and Rector.
- Individual checks are also exposed (`composer phpcs`, `composer phpstan`, `composer rector`, etc.).

You can run these locally or inside the container, e.g. `docker-compose exec web composer standards:check`.

### Tech Stack
- Laravel 12 with Jetstream (Inertia + Vue 3)
- Vite 7, TailwindCSS 3, Ziggy, Axios
- PHP testing with Pest, optional coverage (`composer coverage`)
- Front-end testing with Jest (`npm run test:unit`)
- E2E testing with Playwright (`npm run test:e2e`, UI mode `npm run test:e2e:ui`)

### Laravel Pint
This template comes bundled with Laravel Pint.
https://laravel.com/docs/12.x/pint

**To run**
`docker-compose exec web ./vendor/bin/pint`

**To run against a specific folder**
i.e for **app/Models** `docker-compose exec web ./vendor/bin/pint app/Models`

### Laravel Jetstream
Jetstream is installed with the Inertia stack by default.
https://jetstream.laravel.com/introduction.html

To regenerate the scaffolding, run:
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
- PHP feature/unit tests: `docker-compose exec web composer tests`
- PHP coverage (requires Xdebug): `docker-compose exec web composer coverage`
- Jest unit tests: `docker-compose exec web npm run test:unit`
- Playwright E2E: `docker-compose exec web npm run test:e2e`
- Playwright HTML report: `docker-compose exec web npm run test:e2e -- --project=chromium --reporter=html && npx playwright show-report`
- Playwright UI mode: `docker-compose exec web npm run test:e2e:ui`

