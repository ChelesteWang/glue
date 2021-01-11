import { Component, Prop, h } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-action-sheet',
  styleUrl: 'glue-action-sheet.less',
  shadow: false,
})
export class GlueActionSheet {
  @Prop() first: string;

  @Prop() middle: string;

  @Prop() last: string;

  render() {
    return <div>Hello, World! I'm </div>;
  }
}
