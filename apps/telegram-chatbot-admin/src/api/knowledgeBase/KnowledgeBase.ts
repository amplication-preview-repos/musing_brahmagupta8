import { JsonValue } from "type-fest";

export type KnowledgeBase = {
  createdAt: Date;
  description: string | null;
  file: JsonValue;
  fileName: string | null;
  id: string;
  updatedAt: Date;
  uploadedAt: Date | null;
};
