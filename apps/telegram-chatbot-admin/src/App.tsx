import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { KnowledgeBaseList } from "./knowledgeBase/KnowledgeBaseList";
import { KnowledgeBaseCreate } from "./knowledgeBase/KnowledgeBaseCreate";
import { KnowledgeBaseEdit } from "./knowledgeBase/KnowledgeBaseEdit";
import { KnowledgeBaseShow } from "./knowledgeBase/KnowledgeBaseShow";
import { ConversationList } from "./conversation/ConversationList";
import { ConversationCreate } from "./conversation/ConversationCreate";
import { ConversationEdit } from "./conversation/ConversationEdit";
import { ConversationShow } from "./conversation/ConversationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TelegramChatbot"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="KnowledgeBase"
          list={KnowledgeBaseList}
          edit={KnowledgeBaseEdit}
          create={KnowledgeBaseCreate}
          show={KnowledgeBaseShow}
        />
        <Resource
          name="Conversation"
          list={ConversationList}
          edit={ConversationEdit}
          create={ConversationCreate}
          show={ConversationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
