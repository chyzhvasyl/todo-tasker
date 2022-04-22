import React, { ReactNode } from "react";
import './todo-list.component.scss';
import { Grid } from "@mui/material";

export class TodoListComponent extends React.Component<unknown, unknown> {
  public render(): ReactNode {
    return (
      <Grid container
            direction="row"
            justifyContent="center"
      >
        <Grid item>
          <div className="todo-list-container p-3">
            section 1
          </div>
        </Grid>
      </Grid>
    );
  }
}
