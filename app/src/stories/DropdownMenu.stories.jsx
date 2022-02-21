import React from "react";
import DropdownMenu from "../components/DropdownMenu";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

export default {
  title: 'DropdownMenu',
  component: DropdownMenu
}

storiesOf("DropdownMenu", module)
.add('User owns comment', () => {
  <DropdownMenu onEdit={action("onEdit")} onDelete={action("onDelete")}/>;
})
.add('User does not own comment', () => {
  <DropdownMenu disabled onEdit={action("onEdit")} onDelete={action("onDelete")}/>;
})
