import React from "react";
import EditDeleteMenu from "../components/EditDeleteMenu";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";


storiesOf("DropdownMenu", module)
.add('User owns comment', () => {
  <EditDeleteMenu onEdit={action("onEdit")} onDelete={action("onDelete")}/>;
})
.add('User does not own comment', () => {
  <EditDeleteMenu disabled onEdit={action("onEdit")} onDelete={action("onDelete")}/>;
})
