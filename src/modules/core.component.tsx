import React from "react";
import { TodoContainerComponent } from "./todo";

export class CoreComponent extends React.Component<unknown, unknown> {
  public render(): React.ReactNode {
    return (<TodoContainerComponent></TodoContainerComponent>);
  }
}
