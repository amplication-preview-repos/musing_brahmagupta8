import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ConversationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="end_time" source="endTime" />
        <TextInput label="messages" multiline source="messages" />
        <TextInput label="session_id" source="sessionId" />
        <DateTimeInput label="start_time" source="startTime" />
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
