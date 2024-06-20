import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConversationWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  messages?: StringNullableFilter;
  sessionId?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
