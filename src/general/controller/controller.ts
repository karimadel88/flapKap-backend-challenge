import { Model } from "sequelize";
import ControllerInterface from "./controller-interface";
import Repository from "../repository/repository";
import { Request, Response } from "express";

export class Controller implements ControllerInterface {
  private repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  /**
   * {@inheritDoc}
   */
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const filters = { ...req.body, ...req.query };
      console.log(filters);
      const items = await this.repository.findAll(filters);
      res.send(items);
    } catch (error: Error | any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * {@inheritDoc}
   */
  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const item = await this.repository.find(id);
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ error: `this record not found` });
      }
    } catch (error: Error | any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * {@inheritDoc}
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const item = await this.repository.create(req.body);
      res.status(201).json(item);
    } catch (error: Error | any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * {@inheritDoc}
   */
  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const updatedItem = await this.repository.update(id, req.body);
      if (updatedItem) {
        res.json(updatedItem);
      } else {
        res.status(404).json({ error: `This record not found` });
      }
    } catch (error: Error | any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * {@inheritDoc}
   */
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const success = await this.repository.delete(id);
      if (success) {
        res.json({ message: `This record deleted successfully` });
      } else {
        res.status(404).json({ error: `This record not found` });
      }
    } catch (error: Error | any) {
      res.status(400).json({ error: error.message });
    }
  }
}
