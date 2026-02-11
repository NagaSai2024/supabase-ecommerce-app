import type { Request, Response } from "express";
import { pool } from "../db/index.js";

export async function getCategoryProductsController(req: Request, res: Response) {
    const { category } = req.params;

    try {
        const { rows } = await pool.query(`
            SELECT id, title, image_url, root_bs_rank, discount_percent
            FROM products
            WHERE categories @> ARRAY[$1]
            LIMIT 4
        `, [category]);

        const formatted = rows.map((item) => {
            let subtitle = "Special Offer";

            if (item.discount_percent !== null && item.discount_percent >= 30) {
                subtitle = "Min. 30% Off";
            } else if (item.root_bs_rank !== null && item.root_bs_rank <= 300) {
                subtitle = "Top Picks";
            }

            return {
                id: item.id,
                title: item.title,
                image_url: item.image_url,
                subtitle,
            };
        });

        res.json(formatted);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch category products" });
    }
}
