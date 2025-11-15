# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## API requests (Axios + React Query)

This project is pre-configured with Axios and TanStack React Query.

- **Base URL**: Set `VITE_API_BASE_URL` in a local env file (e.g. create `.env.local` in the project root):
  - `VITE_API_BASE_URL=http://localhost:3000`
  - Defaults to `/api` if not set.
- **Axios instance**: `src/lib/http.js` (adds Authorization header from `localStorage.authToken` if present).
- **Query Client**: `src/lib/queryClient.js` (sensible defaults for retries, stale time).
- **Provider**: Wired in `src/main.jsx` with React Query Devtools in development.

### Quick usage

Fetch with React Query using the generic hook:

```js
import { useApiQuery, useApiMutation } from "./src/hooks/useApi";

function Example() {
  const users = useApiQuery({
    key: ["users"],
    url: "/users",
  });

  const createUser = useApiMutation({ url: "/users", method: "post" });

  // createUser.mutate({ name: "Alice" })
}
```

Or use the small API client helpers:

```js
import api from "./src/api/client";

async function loadUsers() {
  const users = await api.get("/users");
  return users;
}
```
