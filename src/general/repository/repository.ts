import { Model, ModelCtor, ModelType } from "sequelize";
import RepositoryInterface from "./repository-interface";

export default class Repository implements RepositoryInterface<Model> {
  /**
   * Model for repository
   */
  private model: ModelCtor<Model>;

  /**
   * Constructor for repository
   * @param model
   */
  constructor(model: ModelCtor<Model>) {
    this.model = model;
  }

  /**
   * {@inheritDoc}
   */
  public async findAll(options: Record<any, any> = {}) {
    return await this.model.findAll(options);
  }

  /**
   * {@inheritDoc}
   */
  public async find(id: number) {
    return await this.model.findByPk(id);
  }

  /**
   * {@inheritDoc}
   */
  public async create(data: Record<any, any>) {
    const modelInstance = await this.model.build(data).save();
    return modelInstance;
  }

  /**
   * {@inheritDoc}
   */
  public async update(id: number, data: Record<any, any>) {
    const model = await this.find(id);
    if (model) {
      return await model.update(data);
    }
    return null;
  }

  /**
   * {@inheritDoc}
   */
  public async delete(id: number) {
    const model = await this.find(id);
    if (model) {
      await model.destroy();
      return true;
    }

    return false;
  }
}
