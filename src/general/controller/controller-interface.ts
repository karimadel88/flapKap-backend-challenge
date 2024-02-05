import { Model } from "sequelize";
import { Request, Response } from "express";

export default interface ControllerInterface {
  /**
   * Get all
   */
  getAll(req: Request, res: Response): Promise<any>;

  /**
   * Get by id
   */
  getById(req: Request, res: Response): Promise<any>;

  /**
   * Create new
   */
  create(req: Request, res: Response): Promise<any>;

  /**
   * Update
   */
  update(req: Request, res: Response): Promise<any>;

  /**
   * Delete
   */
  delete(req: Request, res: Response): Promise<any>;
}
