import { UpdatedRequest } from "app/general/utils/types";
import productRepository from "app/products/repositories/product-repository";
import userRepository from "app/users/repositories/user-repository";
import exp from "constants";
import { Response, Request } from "express";
export async function authenticateSeller(
  req: Request,
  res: Response,
  next: any,
) {
  const userId = req.header("userId");

  if (!userId) {
    return res.status(404).json({ error: "Log in first" });
  }

  const user = (await userRepository.find(parseInt(userId))) as any;

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  if (user.role === "seller") {
    (req as any).user = user;
    req.body = { ...req.body, sellerid: user.id };

    next();
  } else {
    res.status(403).json({ error: "Permission denied" });
  }
}
