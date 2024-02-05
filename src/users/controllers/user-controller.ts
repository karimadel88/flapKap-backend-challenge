import { Controller } from "app/general/controller/controller";
import User from "../model/user";
import userRepository from "../repositories/user-repository";
import { Request, Response } from "express";
import productRepository from "app/products/repositories/product-repository";

class UserController extends Controller {
  /**
   * Deposit controller used to deposit money
   */
  public async deposit(req: Request, res: Response) {
    try {
      const userId = req.header("userId");

      if (!userId) {
        return res.status(404).json({ error: "Log in first" });
      }
      let { amount } = req.body;
      amount = parseInt(amount);
      console.log(amount);
      const user = (await userRepository.find(parseInt(userId))) as any;

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // validate amount must be 5, 10, 20, 50 and 100
      if (
        amount !== 5 &&
        amount !== 10 &&
        amount !== 20 &&
        amount !== 50 &&
        amount !== 100
      ) {
        return res
          .status(400)
          .json({ error: "Amount must be 5, 10, 20, 50 or 100" });
      }

      if (user.role !== "buyer") {
        return res.status(403).json({ error: "Permission denied" });
      }

      user.deposit = user.deposit + amount;
      await user.save();
      res.json({ message: "Deposit successful", deposit: user.deposit });
    } catch (error: Error | any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * Buy based on deposit value
   */
  public async buy(req: Request, res: Response) {
    try {
      const userId = req.header("userId");
      if (!userId) {
        return res.status(404).json({ error: "Log in first" });
      }

      const { productId, amount } = req.body;
      const user = (await userRepository.find(parseInt(userId))) as any;

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (user.role !== "buyer") {
        return res.status(403).json({ error: "Permission denied" });
      }

      const product = (await productRepository.find(
        parseInt(productId),
      )) as any;

      if (!product || product.amountAvailable < parseFloat(amount)) {
        return res.status(404).json({ error: "Product not available" });
      }

      const totalCost = product.price * parseFloat(amount);
      if (user.deposit < totalCost) {
        return res.status(400).json({ error: "Not enough deposit" });
      }

      user.deposit -= totalCost;
      await user.save();

      product.amountAvailable = product.amountAvailable - parseFloat(amount);
      await product.save();

      res.json({
        message: "Purchase successful",
        totalSpent: totalCost,
        productsPurchased: req.body.amount,
        change: user.deposit,
      });
    } catch (error: Error | any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * Reset controller used to reset deposit
   */
  public async resetDeposit(req: Request, res: Response) {
    try {
      const { userId } = req.body;

      const user = (await userRepository.find(parseInt(userId))) as any;

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (user.role !== "buyer") {
        return res.status(403).json({ error: "Permission denied" });
      }

      user.deposit = 0;
      await user.save();

      res.json({ message: "Deposit reset successful", deposit: 0 });
    } catch (error: Error | any) {
      res.status(400).json({ error: error.message });
    }
  }
}

const userController = new UserController(userRepository);

export default userController;
