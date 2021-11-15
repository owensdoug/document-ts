import { Entity } from "@owensdoug/model-ts/src/entity";
import { Content } from "./content";

export interface Section extends Entity {
  contents: Content[];
}
