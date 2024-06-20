import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type KnowledgeBaseWhereInput = {
  description?: StringNullableFilter;
  file?: JsonFilter;
  fileName?: StringNullableFilter;
  id?: StringFilter;
  uploadedAt?: DateTimeNullableFilter;
};
