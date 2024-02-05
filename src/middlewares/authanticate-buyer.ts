import { Response, Request } from "express";

export function authenticateBuyer(req: Request, res: Response, next: any) {
  if (req.query.role === "buyer") {
    next();
  } else {
    res.status(403).json({ error: "Permission denied" });
  }
}
