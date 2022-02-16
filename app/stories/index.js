import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "./Button"
import Deck from "components/Deck"

defaultValues = { 
  text: "Hello World",
  stuff1:" bye world"
};

storiesOf("Button", module)
  .addParameter({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Default", () => <Button props={defaultValues} />)

storiesOf("flashcard", module)
  .addParameter({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Empty", () => {
    <Flashcard />
  })

storiesOf("Deck", module)
  .addParameter({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Edit", () => (
    <Edit 
      name="Spanish"
      onSave={(name) => action("onSave")(name)} 
    />
  ))
  .add("Create", () => (
    <Create
      onSave={(name) => action("onSave")(name)} 
    />
  ))
  .add("Delete", () => (
    <Delete onClick={action("onCDelete")}/>
  ))
  
