import { Entity } from "@owensdoug/model-ts/src/entity";
import { Section } from "./section";

export interface Document extends Entity<Document> {
  name: string;
  description: string;
  detail: string;
  sections: Section[];
}
