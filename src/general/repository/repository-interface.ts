import { Attributes, CreateOptions, Model } from "sequelize";

/**
 * Interface for repository
 */
export default interface RepositoryInterface<T extends Model> {
  /**
   * List All data
   */
  findAll(): Promise<Model<{}, {}>[]>;

  /**
   * Find row by id
   * @param id
   */
  find(id: number): Promise<T | null>;

  /*
   * Create new row
   * @param data
   */
  create(
    data: T,
  ): Promise<
    CreateOptions<Attributes<T>> extends
      | { returning: false }
      | { ignoreDuplicates: true }
      ? void
      : T
  >;

  /**
   * Update row by id
   * @param id : number
   * @param data : T
   */
  update(id: number, data: T): Promise<T | null>;

  /**
   * Delete row by id
   * @param id : number
   */
  delete(id: number): Promise<boolean>;
}
