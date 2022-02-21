import React from "react";
import EditDeleteMenu from "../components/EditDeleteMenu";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

export default {
  title: "EditDeleteMenu",
  component: EditDeleteMenu
}

export const Egg = () => <EditDeleteMenu onEdit={action("onEdit")} onDelete={action("onDelete")}/>;

export const Bacon = () => <EditDeleteMenu disabled onEdit={action("onEdit")} onDelete={action("onDelete")}/>;


// storiesOf("EditDeleteMenu", module)
//   .addParameters({

//   })
//   .add('User owns comment', () => {
//     <EditDeleteMenu onEdit={action("onEdit")} onDelete={action("onDelete")} />;
//   })
//   .add('User does not own comment', () => {
//     <EditDeleteMenu disabled onEdit={action("onEdit")} onDelete={action("onDelete")} />;
//   })
