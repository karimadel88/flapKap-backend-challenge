import { Model } from "sequelize";

/**
 * Role type: used as a type guard for user
 */
export type RoleType = "seller" | "buyer";

/**
 * Updated Request
 */
export interface UpdatedRequest extends Request {
  user: Record<any, any>;
}
