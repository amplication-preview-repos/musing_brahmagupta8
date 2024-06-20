import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const KnowledgeBaseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="file_name" source="fileName" />
        <DateTimeInput label="uploaded_at" source="uploadedAt" />
      </SimpleForm>
    </Edit>
  );
};
