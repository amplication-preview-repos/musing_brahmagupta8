import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ConversationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="end_time" source="endTime" />
        <TextInput label="messages" multiline source="messages" />
        <TextInput label="session_id" source="sessionId" />
        <DateTimeInput label="start_time" source="startTime" />
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
