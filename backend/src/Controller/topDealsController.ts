import { pool } from "../db/index.js";
import type { Request, Response } from "express";

export async function getTopDealsController(req: Request, res: Response) {
  try {
    const { rows } = await pool.query(`
      SELECT id, root_bs_rank, title, image_url, final_price
      FROM products
      ORDER BY root_bs_rank ASC
      LIMIT 10
    `);

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch top deals" });
  }
}
