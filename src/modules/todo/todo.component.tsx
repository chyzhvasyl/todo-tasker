import React, { ReactNode } from "react";
import { TodoListComponent } from "./todo-list";

export class TodoContainerComponent extends React.Component<unknown, unknown> {
  public render(): ReactNode {
    return (<TodoListComponent></TodoListComponent>);
  }
}
