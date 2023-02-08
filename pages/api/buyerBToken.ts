import { GetBuyerB } from "@/lib/GetBuyerB"

export default async function handler(req: any, res: any) {
    try {
      const result = await GetBuyerB();
      res.status(200).json({ result })
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' })
    }
  }