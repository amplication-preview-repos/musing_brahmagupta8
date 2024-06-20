import { SortOrder } from "../../util/SortOrder";

export type ConversationOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  messages?: SortOrder;
  sessionId?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
