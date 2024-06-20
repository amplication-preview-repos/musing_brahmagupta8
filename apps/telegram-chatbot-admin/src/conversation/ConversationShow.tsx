import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ConversationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="end_time" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="messages" source="messages" />
        <TextField label="session_id" source="sessionId" />
        <TextField label="start_time" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_id" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
