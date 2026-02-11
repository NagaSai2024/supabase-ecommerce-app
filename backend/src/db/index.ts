import { Pool } from "pg";

export const pool = new Pool({
    connectionString:
    "postgresql://postgres:NagaSai%402025@localhost:5432/omniDB",
});
