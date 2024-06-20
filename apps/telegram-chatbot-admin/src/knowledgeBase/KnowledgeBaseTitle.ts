import { KnowledgeBase as TKnowledgeBase } from "../api/knowledgeBase/KnowledgeBase";

export const KNOWLEDGEBASE_TITLE_FIELD = "fileName";

export const KnowledgeBaseTitle = (record: TKnowledgeBase): string => {
  return record.fileName?.toString() || String(record.id);
};
