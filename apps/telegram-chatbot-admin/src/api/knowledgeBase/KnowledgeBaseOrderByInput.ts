import { SortOrder } from "../../util/SortOrder";

export type KnowledgeBaseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  file?: SortOrder;
  fileName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadedAt?: SortOrder;
};
