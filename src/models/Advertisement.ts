import type { Types, Model } from "mongoose";
import { Schema, model, models } from "mongoose";
/**
 * This is an interface that represents a database(MongoDB) document for Advertisement.
 */
type AdvertisementTypes = {
  type: "POPUP" | "MENU" | "BANNER";
  // Other properties specific to each type
};
export interface InterfacePlugin {
  _id: Types.ObjectId;
  orgId: Types.ObjectId;
  name: string;
  link: string;
  type: AdvertisementTypes;
  startDate: Date;
  endDate: Date;
}

/**
 * @param  name - Name of the advertisement (type: String)
 * Description: Name of the advertisement.
 */

/**
 * @param  orgId - Organization ID associated with the advertisement (type: Schema.Types.ObjectId)
 * Description: Organization ID associated with the advertisement.
 */

/**
 * @param  link - Link associated with the advertisement (type: String)
 * Description: Link associated with the advertisement.
 */

/**
 * @param  type - Type of advertisement (POPUP, MENU, BANNER) (type: String)
 * Description: Type of advertisement (POPUP, MENU, BANNER).
 */

/**
 * @param  startDate - Start date of the advertisement (type: Date)
 * Description: Start date of the advertisement.
 */

/**
 * @param  endDate - End date of the advertisement (type: Date)
 * Description: End date of the advertisement.
 */
const advertisementSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  orgId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["POPUP", "MENU", "BANNER"],
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const pluginModel = (): Model<InterfacePlugin> =>
  model<InterfacePlugin>("Advertisement", advertisementSchema);

// This syntax is needed to prevent Mongoose OverwriteModelError while running tests.
export const Plugin = (models.Plugin || pluginModel()) as ReturnType<
  typeof pluginModel
>;