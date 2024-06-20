import { InputJsonValue } from "../../types";

export type KnowledgeBaseUpdateInput = {
  description?: string | null;
  file?: InputJsonValue;
  fileName?: string | null;
  uploadedAt?: Date | null;
};
