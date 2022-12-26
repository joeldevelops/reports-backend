# Reports Backend

## TODO

- [x] Setup PG/Sequelize
- [x] Docker/compose
- [ ] Bun
- [x] Comments
- [ ] Threaded comments
- [ ] Groups
- [ ] Integration tests
- [ ] Linting

# Setup

### Local Dev

To run, the following commands will start the application and dependencies:

```
npm run pg
npm run start:dev
```

### Migrations

Typically with a fresh db, you will need to run the migrations first:

```
npm run db:migrate
```

### Seeding the Database

Must be done after migrations

```
npm run db:seed
```

### Docker
For initial docker setup with docker compose, run:
```
npm run compose:build
```

After the initial build, you will be safe to use the following commands to bring it up/down:
```
npm run compose:up
npm run compose:down
```

If you ever want to remove all data and start fresh:
```
npm run compose:nuke
```
