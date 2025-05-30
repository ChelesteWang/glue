import { Component, Prop, h, Host, State } from '@stencil/core';
import classNames from 'classnames';
import '@glue/touch-emulator';
import { createNamespace } from '../../utils/create/index';
import { UseTouch } from '../../utils/composables/use-touch';
const touch = new UseTouch();
const [bem] = createNamespace('glue-key');
const CollapseIcon = (
  <svg class={bem('collapse-icon')} viewBox="0 0 30 24">
    <path
      d="M25.877 12.843h-1.502c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h1.5c.187 0 .187 0 .187-.188v-1.511c0-.19 0-.191-.185-.191zM17.999 10.2c0 .188 0 .188.188.188h1.687c.188 0 .188 0 .188-.188V8.688c0-.187.004-.187-.186-.19h-1.69c-.187 0-.187 0-.187.19V10.2zm2.25-3.967h1.5c.188 0 .188 0 .188-.188v-1.7c0-.19 0-.19-.188-.19h-1.5c-.189 0-.189 0-.189.19v1.7c0 .188 0 .188.19.188zm2.063 4.157h3.563c.187 0 .187 0 .187-.189V4.346c0-.19.004-.19-.185-.19h-1.69c-.187 0-.187 0-.187.188v4.155h-1.688c-.187 0-.187 0-.187.189v1.514c0 .19 0 .19.187.19zM14.812 24l2.812-3.4H12l2.813 3.4zm-9-11.157H4.31c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h1.502c.187 0 .187 0 .187-.188v-1.511c0-.19.01-.191-.189-.191zm15.937 0H8.25c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h13.5c.188 0 .188 0 .188-.188v-1.511c0-.19 0-.191-.188-.191zm-11.438-2.454h1.5c.188 0 .188 0 .188-.188V8.688c0-.187 0-.187-.188-.189h-1.5c-.187 0-.187 0-.187.189V10.2c0 .188 0 .188.187.188zM27.94 0c.563 0 .917.21 1.313.567.518.466.748.757.748 1.51v14.92c0 .567-.188 1.134-.562 1.512-.376.378-.938.566-1.313.566H2.063c-.563 0-.938-.188-1.313-.566-.562-.378-.75-.945-.75-1.511V2.078C0 1.51.188.944.562.567.938.189 1.5 0 1.875 0zm-.062 2H2v14.92h25.877V2zM5.81 4.157c.19 0 .19 0 .19.189v1.762c-.003.126-.024.126-.188.126H4.249c-.126-.003-.126-.023-.126-.188v-1.7c-.187-.19 0-.19.188-.19zm10.5 2.077h1.503c.187 0 .187 0 .187-.188v-1.7c0-.19 0-.19-.187-.19h-1.502c-.188 0-.188.001-.188.19v1.7c0 .188 0 .188.188.188zM7.875 8.5c.187 0 .187.002.187.189V10.2c0 .188 0 .188-.187.188H4.249c-.126-.002-.126-.023-.126-.188V8.625c.003-.126.024-.126.188-.126zm7.875 0c.19.002.19.002.19.189v1.575c-.003.126-.024.126-.19.126h-1.563c-.126-.002-.126-.023-.126-.188V8.625c.002-.126.023-.126.189-.126zm-6-4.342c.187 0 .187 0 .187.189v1.7c0 .188 0 .188-.187.188H8.187c-.126-.003-.126-.023-.126-.188V4.283c.003-.126.024-.126.188-.126zm3.94 0c.185 0 .372 0 .372.189v1.762c-.002.126-.023.126-.187.126h-1.75C12 6.231 12 6.211 12 6.046v-1.7c0-.19.187-.19.187-.19z"
      fill="currentColor"
    />
  </svg>
);

const DeleteIcon = (
  <svg class={bem('delete-icon')} viewBox="0 0 32 22">
    <path
      d="M28.016 0A3.991 3.991 0 0132 3.987v14.026c0 2.2-1.787 3.987-3.98 3.987H10.382c-.509 0-.996-.206-1.374-.585L.89 13.09C.33 12.62 0 11.84 0 11.006c0-.86.325-1.62.887-2.08L9.01.585A1.936 1.936 0 0110.383 0zm0 1.947H10.368L2.24 10.28c-.224.226-.312.432-.312.73 0 .287.094.51.312.729l8.128 8.333h17.648a2.041 2.041 0 002.037-2.04V3.987c0-1.127-.915-2.04-2.037-2.04zM23.028 6a.96.96 0 01.678.292.95.95 0 01-.003 1.377l-3.342 3.348 3.326 3.333c.189.188.292.43.292.679 0 .248-.103.49-.292.679a.96.96 0 01-.678.292.959.959 0 01-.677-.292L18.99 12.36l-3.343 3.345a.96.96 0 01-.677.292.96.96 0 01-.678-.292.962.962 0 01-.292-.68c0-.248.104-.49.292-.679l3.342-3.348-3.342-3.348A.963.963 0 0114 6.971c0-.248.104-.49.292-.679A.96.96 0 0114.97 6a.96.96 0 01.677.292l3.358 3.348 3.345-3.348A.96.96 0 0123.028 6z"
      fill="currentColor"
    />
  </svg>
);
@Component({
  tag: 'glue-key',
  styleUrl: 'glue-key.less',
  shadow: false,
})
export class GlueKey {
  @Prop() type: string;
  @Prop() text: string | number;
  @Prop() color: string;
  @Prop() wider: boolean;
  @Prop() large: boolean;
  @Prop() loading: boolean;
  @State() active = false;
  onTouchStart = (event: TouchEvent) => {
    touch.start(event);
    this.active = true;
  };

  onTouchMove = (event: TouchEvent) => {
    touch.move(event);

    if (touch.direction) {
      this.active = false;
    }
  };

  onTouchEnd = (event: TouchEvent) => {
    console.log(event);
    if (this.active) {
      // eliminate tap delay on safari
      // see: https://github.com/youzan/vant/issues/6836
      // if (!slots.default) {
      //   event.preventDefault();
      // }
      this.active = false;
      // emit('press', this.text, this.type);
    }
  };

  renderContent = () => {
    if (this.loading) {
      return <glue-loading class={bem('loading-icon')} />;
    }

    const text = this.text;

    switch (this.type) {
      case 'delete':
        return text || DeleteIcon;
      case 'extra':
        return text || CollapseIcon;
      default:
        return text;
    }
  };
  render() {
    return (
      <Host
        class={classNames('glue-key__wrapper', {
          'glue-key--wider': this.wider,
        })}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
        onTouchcancel={this.onTouchEnd}
      >
        <div
          role="button"
          tabindex={0}
          class={classNames('glue-key', bem([this.color]), {
            'glue-key--large': this.large,
            'glue-key--active': this.active,
            'glue-key--delete': this.type === 'delete',
          })}
        >
          {this.renderContent()}
        </div>
      </Host>
    );
  }
}
