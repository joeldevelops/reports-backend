# Reports Backend

## TODO

- [x] Setup PG/Sequelize
- [x] Docker/compose
- [ ] Bun
- [ ] Comments
- [ ] Threaded comments
- [ ] Integration tests
- [ ] Linting

# Setup

To run, the following commands will start the application and dependencies:

```
npm run pg
npm run start:dev
```

## Migrations

Typically with a fresh db, you will need to run the migrations first:

```
npm run db:migrate
```

## Seeding the Database

Must be done after migrations

```
npm run db:seed
```
