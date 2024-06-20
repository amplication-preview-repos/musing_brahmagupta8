import { Conversation as TConversation } from "../api/conversation/Conversation";

export const CONVERSATION_TITLE_FIELD = "sessionId";

export const ConversationTitle = (record: TConversation): string => {
  return record.sessionId?.toString() || String(record.id);
};
