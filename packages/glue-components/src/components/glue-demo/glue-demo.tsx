import { Component, Prop, h, State } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-demo',
  styleUrl: 'glue-demo.less',
  shadow: false,
})
export class GlueDemo {
  @Prop() first: string;
  @State() showShare = false;
  handleClick = e => {
    console.log(e);
  };
  render() {
    return (
      <div>
        {/* <glue-button type="primary" onGlueClick={this.handleClick}>
          主要按钮
        </glue-button>
        <glue-button type="success">成功按钮</glue-button>
        <glue-button type="default">默认按钮</glue-button>
        <glue-button type="warning">警告按钮</glue-button>
        <glue-button type="danger">危险按钮</glue-button>
        <glue-button plain type="primary">
          朴素按钮
        </glue-button>
        <glue-button plain type="success">
          朴素按钮
        </glue-button>

        <glue-button hairline plain type="primary">
          细边框按钮
        </glue-button>
        <glue-button plain hairline type="success">
          细边框按钮
        </glue-button>
        <glue-button disabled type="primary">
          禁用状态
        </glue-button>
        <glue-button disabled type="success">
          禁用状态
        </glue-button>
        <glue-button loading type="primary"></glue-button>
        <glue-button loading type="primary" loading-type="spinner"></glue-button>
        <glue-button loading type="primary" loading-text="加载中..."></glue-button>
        <glue-button square type="primary">
          方形按钮
        </glue-button>
        <glue-button round type="primary">
          圆形按钮
        </glue-button>
        <glue-button icon="plus" type="primary" />
        <glue-button icon="plus" type="primary">
          按钮
        </glue-button>
        <glue-button plain icon="https://img01.yzcdn.cn/vant/user-active.png" type="primary">
          按钮
        </glue-button>
        <glue-button type="primary" size="large">
          大号按钮
        </glue-button>
        <glue-button type="primary" size="normal">
          普通按钮
        </glue-button>
        <glue-button type="primary" size="small">
          小型按钮
        </glue-button>
        <glue-button type="primary" size="mini">
          迷你按钮
        </glue-button>
        <glue-button type="primary" block>
          块级元素
        </glue-button>
        <glue-button color="#7232dd">单色按钮</glue-button>
        <glue-button color="#7232dd" plain>
          单色按钮
        </glue-button>
        <glue-button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</glue-button> */}
        <glue-cell-group>
          <glue-cell title="单元格" value="内容" />
          <glue-cell title="单元格" value="内容" label="描述信息" />
        </glue-cell-group>
        <glue-cell title="单元格" value="内容" size="large" />
        <glue-cell title="单元格" value="内容" size="large" label="描述信息" />
        <glue-cell title="单元格" icon="location-o" value="内容" />
        <glue-cell value="内容" />
        <glue-cell title="单元格" is-link />
        <glue-cell title="单元格" is-link value="内容" />
        <glue-cell title="单元格" is-link arrow-direction="down" value="内容" />
        <glue-cell-group title="分组1">
          <glue-cell title="单元格" value="内容" />
        </glue-cell-group>
        <glue-cell-group title="分组2">
          <glue-cell title="单元格" value="内容" />
        </glue-cell-group>
        <glue-cell value="内容" is-link></glue-cell>
        <glue-icon name="chat-o" />
        <glue-icon name="chat-o" badge="99+" />
        <glue-badge content="5" slot-content>
          <div class="child" />
        </glue-badge>
      </div>
    );
  }
}
