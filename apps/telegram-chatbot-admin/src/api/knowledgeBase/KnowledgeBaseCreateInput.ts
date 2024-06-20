import { InputJsonValue } from "../../types";

export type KnowledgeBaseCreateInput = {
  description?: string | null;
  file?: InputJsonValue;
  fileName?: string | null;
  uploadedAt?: Date | null;
};
