export type Conversation = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  messages: string | null;
  sessionId: string | null;
  startTime: Date | null;
  updatedAt: Date;
  userId: string | null;
};
