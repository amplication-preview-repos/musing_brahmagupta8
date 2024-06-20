import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const KnowledgeBaseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="file_name" source="fileName" />
        <DateTimeInput label="uploaded_at" source="uploadedAt" />
      </SimpleForm>
    </Create>
  );
};
