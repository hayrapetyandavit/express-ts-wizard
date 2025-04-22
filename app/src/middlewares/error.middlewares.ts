import { Request, Response, NextFunction } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function errorHandler(error: Error, _req: Request, res: Response, next: NextFunction) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
  