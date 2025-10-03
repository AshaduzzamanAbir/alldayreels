# Copilot Instructions for alldayreels

## Project Overview
- **Monorepo structure**: Contains `backend/` (Node.js/Express API) and `frontend/` (not detailed here).
- **Backend**: REST API using Express, with modular structure for controllers, models, routes, and DB connection.

## Key Directories & Files
- `backend/src/controllers/`: Route handler logic (e.g., `auth.controler.js` for authentication)
- `backend/src/models/`: Mongoose models (e.g., `user.model.js`, `Alldayreels.model.js`)
- `backend/src/routes/`: Express route definitions (e.g., `auth.routes.js`)
- `backend/src/db/db.js`: MongoDB connection logic
- `backend/src/app.js`: Express app setup (middleware, routes)
- `backend/server.js`: Entry point for backend server

## Patterns & Conventions
- **Controllers**: Each controller file exports functions for route logic. Use async/await for DB operations.
- **Models**: Mongoose schemas define data structure. Reference models in controllers for DB access.
- **Routes**: Route files import controllers and define Express routes. Use `router` from Express.
- **DB Connection**: All DB access goes through `db.js` (do not connect directly in controllers/models).
- **Error Handling**: Use Express `next(err)` for error propagation; central error handler should be in `app.js`.
- **Naming**: Filenames use lowercase with dots (e.g., `auth.controler.js`). Models use PascalCase for schema names.

## Developer Workflows
- **Start backend**: From `backend/`, run `node server.js` (or use `nodemon` for auto-reload if installed).
- **Install dependencies**: Run `npm install` in `backend/`.
- **Environment variables**: Store secrets (e.g., DB URI, JWT secret) in a `.env` file in `backend/` (not committed).
- **Debugging**: Use `console.log` or Node.js debugger. App entry is `server.js`.

## Integration Points
- **MongoDB**: All persistent data is stored in MongoDB via Mongoose models.
- **Authentication**: Handled in `auth.controler.js` and `auth.routes.js` (likely JWT-based, check code for details).

## Examples
- To add a new resource:
  1. Create a model in `models/`
  2. Add controller logic in `controllers/`
  3. Define routes in `routes/`
  4. Register the route in `app.js`

- To update DB logic, always go through the model and use Mongoose methods.

---

**For AI agents:**
- Follow the modular structure; do not mix controller/model/route logic.
- Use async/await for all DB and async operations.
- Reference existing files for naming and structure.
- Do not hardcode secrets; use environment variables.
