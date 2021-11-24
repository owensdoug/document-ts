import { Entity } from "@owensdoug/model-ts/src/entity";

export interface Content extends Entity<Content> {
  contentId: number;
  documentId: number;
}
