/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ImageFit } from "./components/glue-image/glue-image";
import { RowAlign, RowJustify } from "./components/glue-row/glue-row";
import { ToastType } from "./components/glue-toast/glue-toast";
export namespace Components {
    interface GlueActionBar {
        "safeAreaInsetBottom": true;
    }
    interface GlueActionBarButton {
        "color": string;
        "disabled": boolean;
        "icon": string;
        "loading": boolean;
        "text": string;
        "type": string;
    }
    interface GlueActionBarIcon {
        "badge": string | number;
        "color": string;
        "dot": boolean;
        "icon": string;
        "iconClass": null;
        "text": string;
    }
    interface GlueActionSheet {
        "first": string;
        "last": string;
        "middle": string;
    }
    interface GlueBadge {
        "color": string;
        "content": number | string;
        "dot": boolean;
        "max": number | string;
        "tag": string;
    }
    interface GlueButton {
        "block": boolean;
        "color": string;
        "disabled": boolean;
        "hairline": boolean;
        "icon": string;
        "iconPosition": string;
        "iconPrefix": string;
        "loading": boolean;
        "loadingSize": string;
        "loadingText": string;
        "loadingType": string;
        "nativeType": string;
        "plain": boolean;
        "round": boolean;
        "size": string;
        "square": boolean;
        "tag": string;
        "text": string;
        "type": string;
    }
    interface GlueCard {
        "centered": boolean;
        "currency": string;
        "desc": string;
        "lazyLoad": boolean;
        "num": string | number;
        "originPrice": string | number;
        "price": string | number;
        "tag": string;
        "thumb": string;
        "thumbLink": string;
        "title": string;
    }
    interface GlueCell {
        "arrowDirection": string;
        "border": boolean;
        "center": boolean;
        "clickable": boolean;
        "icon": string;
        "iconPrefix": string;
        "isLink": boolean;
        "label": string | number;
        "required": boolean;
        "size": string;
        "tilabelClasstle": any;
        "title": string;
        "titleClass": any;
        "titleStyle": any;
        "value": string | number;
        "valueClass": any;
    }
    interface GlueCellGroup {
        "border": boolean;
        "title": string;
    }
    interface GlueCol {
        "offset": number;
        "span": number;
    }
    interface GlueComponent {
        "first": string;
        "last": string;
        "middle": string;
    }
    interface GlueIcon {
        "badge": number | string;
        "classPrefix": string;
        "color": string;
        "dot": boolean;
        "name": string;
        "size": number;
        "tag": string;
    }
    interface GlueImage {
        "alt": string;
        "errorIcon": string;
        "fit": ImageFit;
        "height": string | number;
        "iconPrefix": string;
        "lazyLoad": boolean;
        "loadingIcon": string;
        "radius": string | number;
        "round": boolean;
        "showError": boolean;
        "showLoading": boolean;
        "src": string;
        "width": string | number;
    }
    interface GlueLoading {
        "color": string;
        "size": string | number;
        "textColor": string;
        "textSize": string | number;
        "type": string;
        "vertical": boolean;
    }
    interface GlueOverlay {
        "customStyle": object;
        "duration": string | number;
        "lockScroll": boolean;
        "show": boolean;
        "zIndex": string;
    }
    interface GluePopup {
        "closeIcon": string;
        "closeIconPosition": string;
        "closeOnClickOverlay": boolean;
        "closeOnPopstate": boolean;
        "closeable": boolean;
        "duration": string;
        "height": string;
        "lazyRender": boolean;
        "lockScroll": boolean;
        "overlay": boolean;
        "overlayClass": any;
        "overlayStyle": object;
        "position": string;
        "round": boolean;
        "safeAreaInsetBottom": boolean;
        "show": boolean;
        "teleport": string | object;
        "transition": string;
        "transitionAppear": boolean;
        "width": string;
        "zIndex": string;
    }
    interface GlueRate {
        "allowHalf": boolean;
        "color": string;
        "count": number;
        "disabled": boolean;
        "disabledColor": string;
        "first": string;
        "gutter": string;
        "icon": string;
        "iconPrefix": string;
        "modelValue": number;
        "readonly": boolean;
        "size": number;
        "touchable": string;
        "voidColor": string;
        "voidIcon": string;
    }
    interface GlueRow {
        "align": RowAlign;
        "gutter": number;
        "justify": RowJustify;
    }
    interface GlueTag {
        "closeable": boolean;
        "color": string;
        "first": string;
        "mark": boolean;
        "plain": boolean;
        "round": boolean;
        "show": boolean;
        "size": string;
        "textColor": string;
        "type": string;
    }
    interface GlueToast {
        "closeOnClick": boolean;
        "closeOnClickOverlay": boolean;
        "duration": number;
        "forbidClick": boolean;
        "icon": string;
        "iconPrefix": string;
        "loadingType": ToastType;
        "lockScroll": boolean;
        "message": string;
        "overlayClass": null;
        "overlayStyle": object;
        "position": string;
        "show": boolean;
        "transition": string;
        "type": string;
    }
}
declare global {
    interface HTMLGlueActionBarElement extends Components.GlueActionBar, HTMLStencilElement {
    }
    var HTMLGlueActionBarElement: {
        prototype: HTMLGlueActionBarElement;
        new (): HTMLGlueActionBarElement;
    };
    interface HTMLGlueActionBarButtonElement extends Components.GlueActionBarButton, HTMLStencilElement {
    }
    var HTMLGlueActionBarButtonElement: {
        prototype: HTMLGlueActionBarButtonElement;
        new (): HTMLGlueActionBarButtonElement;
    };
    interface HTMLGlueActionBarIconElement extends Components.GlueActionBarIcon, HTMLStencilElement {
    }
    var HTMLGlueActionBarIconElement: {
        prototype: HTMLGlueActionBarIconElement;
        new (): HTMLGlueActionBarIconElement;
    };
    interface HTMLGlueActionSheetElement extends Components.GlueActionSheet, HTMLStencilElement {
    }
    var HTMLGlueActionSheetElement: {
        prototype: HTMLGlueActionSheetElement;
        new (): HTMLGlueActionSheetElement;
    };
    interface HTMLGlueBadgeElement extends Components.GlueBadge, HTMLStencilElement {
    }
    var HTMLGlueBadgeElement: {
        prototype: HTMLGlueBadgeElement;
        new (): HTMLGlueBadgeElement;
    };
    interface HTMLGlueButtonElement extends Components.GlueButton, HTMLStencilElement {
    }
    var HTMLGlueButtonElement: {
        prototype: HTMLGlueButtonElement;
        new (): HTMLGlueButtonElement;
    };
    interface HTMLGlueCardElement extends Components.GlueCard, HTMLStencilElement {
    }
    var HTMLGlueCardElement: {
        prototype: HTMLGlueCardElement;
        new (): HTMLGlueCardElement;
    };
    interface HTMLGlueCellElement extends Components.GlueCell, HTMLStencilElement {
    }
    var HTMLGlueCellElement: {
        prototype: HTMLGlueCellElement;
        new (): HTMLGlueCellElement;
    };
    interface HTMLGlueCellGroupElement extends Components.GlueCellGroup, HTMLStencilElement {
    }
    var HTMLGlueCellGroupElement: {
        prototype: HTMLGlueCellGroupElement;
        new (): HTMLGlueCellGroupElement;
    };
    interface HTMLGlueColElement extends Components.GlueCol, HTMLStencilElement {
    }
    var HTMLGlueColElement: {
        prototype: HTMLGlueColElement;
        new (): HTMLGlueColElement;
    };
    interface HTMLGlueComponentElement extends Components.GlueComponent, HTMLStencilElement {
    }
    var HTMLGlueComponentElement: {
        prototype: HTMLGlueComponentElement;
        new (): HTMLGlueComponentElement;
    };
    interface HTMLGlueIconElement extends Components.GlueIcon, HTMLStencilElement {
    }
    var HTMLGlueIconElement: {
        prototype: HTMLGlueIconElement;
        new (): HTMLGlueIconElement;
    };
    interface HTMLGlueImageElement extends Components.GlueImage, HTMLStencilElement {
    }
    var HTMLGlueImageElement: {
        prototype: HTMLGlueImageElement;
        new (): HTMLGlueImageElement;
    };
    interface HTMLGlueLoadingElement extends Components.GlueLoading, HTMLStencilElement {
    }
    var HTMLGlueLoadingElement: {
        prototype: HTMLGlueLoadingElement;
        new (): HTMLGlueLoadingElement;
    };
    interface HTMLGlueOverlayElement extends Components.GlueOverlay, HTMLStencilElement {
    }
    var HTMLGlueOverlayElement: {
        prototype: HTMLGlueOverlayElement;
        new (): HTMLGlueOverlayElement;
    };
    interface HTMLGluePopupElement extends Components.GluePopup, HTMLStencilElement {
    }
    var HTMLGluePopupElement: {
        prototype: HTMLGluePopupElement;
        new (): HTMLGluePopupElement;
    };
    interface HTMLGlueRateElement extends Components.GlueRate, HTMLStencilElement {
    }
    var HTMLGlueRateElement: {
        prototype: HTMLGlueRateElement;
        new (): HTMLGlueRateElement;
    };
    interface HTMLGlueRowElement extends Components.GlueRow, HTMLStencilElement {
    }
    var HTMLGlueRowElement: {
        prototype: HTMLGlueRowElement;
        new (): HTMLGlueRowElement;
    };
    interface HTMLGlueTagElement extends Components.GlueTag, HTMLStencilElement {
    }
    var HTMLGlueTagElement: {
        prototype: HTMLGlueTagElement;
        new (): HTMLGlueTagElement;
    };
    interface HTMLGlueToastElement extends Components.GlueToast, HTMLStencilElement {
    }
    var HTMLGlueToastElement: {
        prototype: HTMLGlueToastElement;
        new (): HTMLGlueToastElement;
    };
    interface HTMLElementTagNameMap {
        "glue-action-bar": HTMLGlueActionBarElement;
        "glue-action-bar-button": HTMLGlueActionBarButtonElement;
        "glue-action-bar-icon": HTMLGlueActionBarIconElement;
        "glue-action-sheet": HTMLGlueActionSheetElement;
        "glue-badge": HTMLGlueBadgeElement;
        "glue-button": HTMLGlueButtonElement;
        "glue-card": HTMLGlueCardElement;
        "glue-cell": HTMLGlueCellElement;
        "glue-cell-group": HTMLGlueCellGroupElement;
        "glue-col": HTMLGlueColElement;
        "glue-component": HTMLGlueComponentElement;
        "glue-icon": HTMLGlueIconElement;
        "glue-image": HTMLGlueImageElement;
        "glue-loading": HTMLGlueLoadingElement;
        "glue-overlay": HTMLGlueOverlayElement;
        "glue-popup": HTMLGluePopupElement;
        "glue-rate": HTMLGlueRateElement;
        "glue-row": HTMLGlueRowElement;
        "glue-tag": HTMLGlueTagElement;
        "glue-toast": HTMLGlueToastElement;
    }
}
declare namespace LocalJSX {
    interface GlueActionBar {
        "safeAreaInsetBottom"?: true;
    }
    interface GlueActionBarButton {
        "color"?: string;
        "disabled"?: boolean;
        "icon"?: string;
        "loading"?: boolean;
        "onChange"?: (event: CustomEvent<any>) => void;
        "text"?: string;
        "type"?: string;
    }
    interface GlueActionBarIcon {
        "badge"?: string | number;
        "color"?: string;
        "dot"?: boolean;
        "icon"?: string;
        "iconClass"?: null;
        "onChange"?: (event: CustomEvent<any>) => void;
        "text"?: string;
    }
    interface GlueActionSheet {
        "first"?: string;
        "last"?: string;
        "middle"?: string;
    }
    interface GlueBadge {
        "color"?: string;
        "content"?: number | string;
        "dot"?: boolean;
        "max"?: number | string;
        "tag"?: string;
    }
    interface GlueButton {
        "block"?: boolean;
        "color"?: string;
        "disabled"?: boolean;
        "hairline"?: boolean;
        "icon"?: string;
        "iconPosition"?: string;
        "iconPrefix"?: string;
        "loading"?: boolean;
        "loadingSize"?: string;
        "loadingText"?: string;
        "loadingType"?: string;
        "nativeType"?: string;
        "onCheckboxchange"?: (event: CustomEvent<any>) => void;
        "plain"?: boolean;
        "round"?: boolean;
        "size"?: string;
        "square"?: boolean;
        "tag"?: string;
        "text"?: string;
        "type"?: string;
    }
    interface GlueCard {
        "centered"?: boolean;
        "currency"?: string;
        "desc"?: string;
        "lazyLoad"?: boolean;
        "num"?: string | number;
        "onCheckboxchange"?: (event: CustomEvent<any>) => void;
        "originPrice"?: string | number;
        "price"?: string | number;
        "tag"?: string;
        "thumb"?: string;
        "thumbLink"?: string;
        "title"?: string;
    }
    interface GlueCell {
        "arrowDirection"?: string;
        "border"?: boolean;
        "center"?: boolean;
        "clickable"?: boolean;
        "icon"?: string;
        "iconPrefix"?: string;
        "isLink"?: boolean;
        "label"?: string | number;
        "onCheckboxchange"?: (event: CustomEvent<any>) => void;
        "required"?: boolean;
        "size"?: string;
        "tilabelClasstle"?: any;
        "title"?: string;
        "titleClass"?: any;
        "titleStyle"?: any;
        "value"?: string | number;
        "valueClass"?: any;
    }
    interface GlueCellGroup {
        "border"?: boolean;
        "title"?: string;
    }
    interface GlueCol {
        "offset"?: number;
        "span"?: number;
    }
    interface GlueComponent {
        "first"?: string;
        "last"?: string;
        "middle"?: string;
    }
    interface GlueIcon {
        "badge"?: number | string;
        "classPrefix"?: string;
        "color"?: string;
        "dot"?: boolean;
        "name"?: string;
        "size"?: number;
        "tag"?: string;
    }
    interface GlueImage {
        "alt"?: string;
        "errorIcon"?: string;
        "fit"?: ImageFit;
        "height"?: string | number;
        "iconPrefix"?: string;
        "lazyLoad"?: boolean;
        "loadingIcon"?: string;
        "onError"?: (event: CustomEvent<any>) => void;
        "onLoad"?: (event: CustomEvent<any>) => void;
        "radius"?: string | number;
        "round"?: boolean;
        "showError"?: boolean;
        "showLoading"?: boolean;
        "src"?: string;
        "width"?: string | number;
    }
    interface GlueLoading {
        "color"?: string;
        "size"?: string | number;
        "textColor"?: string;
        "textSize"?: string | number;
        "type"?: string;
        "vertical"?: boolean;
    }
    interface GlueOverlay {
        "customStyle"?: object;
        "duration"?: string | number;
        "lockScroll"?: boolean;
        "show"?: boolean;
        "zIndex"?: string;
    }
    interface GluePopup {
        "closeIcon"?: string;
        "closeIconPosition"?: string;
        "closeOnClickOverlay"?: boolean;
        "closeOnPopstate"?: boolean;
        "closeable"?: boolean;
        "duration"?: string;
        "height"?: string;
        "lazyRender"?: boolean;
        "lockScroll"?: boolean;
        "onClick"?: (event: CustomEvent<any>) => void;
        "onClickCloseIcon"?: (event: CustomEvent<any>) => void;
        "onClickOverlay"?: (event: CustomEvent<any>) => void;
        "onClose"?: (event: CustomEvent<any>) => void;
        "onClosed"?: (event: CustomEvent<any>) => void;
        "onOpen"?: (event: CustomEvent<any>) => void;
        "onOpened"?: (event: CustomEvent<any>) => void;
        "overlay"?: boolean;
        "overlayClass"?: any;
        "overlayStyle"?: object;
        "position"?: string;
        "round"?: boolean;
        "safeAreaInsetBottom"?: boolean;
        "show"?: boolean;
        "teleport"?: string | object;
        "transition"?: string;
        "transitionAppear"?: boolean;
        "width"?: string;
        "zIndex"?: string;
    }
    interface GlueRate {
        "allowHalf"?: boolean;
        "color"?: string;
        "count"?: number;
        "disabled"?: boolean;
        "disabledColor"?: string;
        "first"?: string;
        "gutter"?: string;
        "icon"?: string;
        "iconPrefix"?: string;
        "modelValue"?: number;
        "onSelect"?: (event: CustomEvent<any>) => void;
        "readonly"?: boolean;
        "size"?: number;
        "touchable"?: string;
        "voidColor"?: string;
        "voidIcon"?: string;
    }
    interface GlueRow {
        "align"?: RowAlign;
        "gutter"?: number;
        "justify"?: RowJustify;
    }
    interface GlueTag {
        "closeable"?: boolean;
        "color"?: string;
        "first"?: string;
        "mark"?: boolean;
        "onClose"?: (event: CustomEvent<any>) => void;
        "plain"?: boolean;
        "round"?: boolean;
        "show"?: boolean;
        "size"?: string;
        "textColor"?: string;
        "type"?: string;
    }
    interface GlueToast {
        "closeOnClick"?: boolean;
        "closeOnClickOverlay"?: boolean;
        "duration"?: number;
        "forbidClick"?: boolean;
        "icon"?: string;
        "iconPrefix"?: string;
        "loadingType"?: ToastType;
        "lockScroll"?: boolean;
        "message"?: string;
        "onClick"?: (event: CustomEvent<any>) => void;
        "onToggle"?: (event: CustomEvent<any>) => void;
        "overlayClass"?: null;
        "overlayStyle"?: object;
        "position"?: string;
        "show"?: boolean;
        "transition"?: string;
        "type"?: string;
    }
    interface IntrinsicElements {
        "glue-action-bar": GlueActionBar;
        "glue-action-bar-button": GlueActionBarButton;
        "glue-action-bar-icon": GlueActionBarIcon;
        "glue-action-sheet": GlueActionSheet;
        "glue-badge": GlueBadge;
        "glue-button": GlueButton;
        "glue-card": GlueCard;
        "glue-cell": GlueCell;
        "glue-cell-group": GlueCellGroup;
        "glue-col": GlueCol;
        "glue-component": GlueComponent;
        "glue-icon": GlueIcon;
        "glue-image": GlueImage;
        "glue-loading": GlueLoading;
        "glue-overlay": GlueOverlay;
        "glue-popup": GluePopup;
        "glue-rate": GlueRate;
        "glue-row": GlueRow;
        "glue-tag": GlueTag;
        "glue-toast": GlueToast;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "glue-action-bar": LocalJSX.GlueActionBar & JSXBase.HTMLAttributes<HTMLGlueActionBarElement>;
            "glue-action-bar-button": LocalJSX.GlueActionBarButton & JSXBase.HTMLAttributes<HTMLGlueActionBarButtonElement>;
            "glue-action-bar-icon": LocalJSX.GlueActionBarIcon & JSXBase.HTMLAttributes<HTMLGlueActionBarIconElement>;
            "glue-action-sheet": LocalJSX.GlueActionSheet & JSXBase.HTMLAttributes<HTMLGlueActionSheetElement>;
            "glue-badge": LocalJSX.GlueBadge & JSXBase.HTMLAttributes<HTMLGlueBadgeElement>;
            "glue-button": LocalJSX.GlueButton & JSXBase.HTMLAttributes<HTMLGlueButtonElement>;
            "glue-card": LocalJSX.GlueCard & JSXBase.HTMLAttributes<HTMLGlueCardElement>;
            "glue-cell": LocalJSX.GlueCell & JSXBase.HTMLAttributes<HTMLGlueCellElement>;
            "glue-cell-group": LocalJSX.GlueCellGroup & JSXBase.HTMLAttributes<HTMLGlueCellGroupElement>;
            "glue-col": LocalJSX.GlueCol & JSXBase.HTMLAttributes<HTMLGlueColElement>;
            "glue-component": LocalJSX.GlueComponent & JSXBase.HTMLAttributes<HTMLGlueComponentElement>;
            "glue-icon": LocalJSX.GlueIcon & JSXBase.HTMLAttributes<HTMLGlueIconElement>;
            "glue-image": LocalJSX.GlueImage & JSXBase.HTMLAttributes<HTMLGlueImageElement>;
            "glue-loading": LocalJSX.GlueLoading & JSXBase.HTMLAttributes<HTMLGlueLoadingElement>;
            "glue-overlay": LocalJSX.GlueOverlay & JSXBase.HTMLAttributes<HTMLGlueOverlayElement>;
            "glue-popup": LocalJSX.GluePopup & JSXBase.HTMLAttributes<HTMLGluePopupElement>;
            "glue-rate": LocalJSX.GlueRate & JSXBase.HTMLAttributes<HTMLGlueRateElement>;
            "glue-row": LocalJSX.GlueRow & JSXBase.HTMLAttributes<HTMLGlueRowElement>;
            "glue-tag": LocalJSX.GlueTag & JSXBase.HTMLAttributes<HTMLGlueTagElement>;
            "glue-toast": LocalJSX.GlueToast & JSXBase.HTMLAttributes<HTMLGlueToastElement>;
        }
    }
}
