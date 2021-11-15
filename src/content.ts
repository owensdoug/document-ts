import { Entity } from "@owensdoug/model-ts/src/entity";

export interface Content extends Entity {
  contentId: number;
  documentId: number;
}
