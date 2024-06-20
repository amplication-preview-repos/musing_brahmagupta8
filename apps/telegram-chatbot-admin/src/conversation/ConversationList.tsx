import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ConversationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Conversations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="end_time" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="messages" source="messages" />
        <TextField label="session_id" source="sessionId" />
        <TextField label="start_time" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_id" source="userId" />
      </Datagrid>
    </List>
  );
};
