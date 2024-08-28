<template>
  <div style="max-width: 600px">
    <a-table
      :columns="columns"
      :components="components"
      :data-source="tableList"
      :rowKey="(record) => record.key"
      bordered
      :pagination="ispagination"
      size="middle"
      :scroll="{ x: scrollX }"
    >
      <template
        v-for="column in columns"
        :slot="column.scopedSlots ? column.scopedSlots.customRender : ''"
        slot-scope="text, record"
      >
        <slot
          :name="column.scopedSlots ? column.scopedSlots.customRender : ''"
          v-bind="record"
        ></slot>
      </template>
    </a-table>
  </div>
</template>
<script>
import Vue from 'vue';
// import VueDraggableResizable from 'vue-draggable-resizable';
//
// Vue.component('vue-draggable-resizable', VueDraggableResizable);

export default {
  name: 'cTable',
  props: {
    // 表格标题配置数据
    columns: {
      type: Array,
      default: () => {
        return [
          {
            title: '日期',
            dataIndex: 'name',
            width: 100, // 要有width
          },
          {
            title: '分类',
            dataIndex: 'age',
            width: 100, // 要有width
          },
          {
            title: '分类',
            dataIndex: 'sex',
            width: 100, // 要有width
          },
          {
            title: '分类',
            dataIndex: 'agesss',
            width: 100, // 要有width
          },
          {
            title: '分类',
            dataIndex: 'ttt',
            width: 100, // 要有width
          },
          {
            title: '分类',
            dataIndex: 'hhh',
            width: 100, // 要有width
          },
        ];
      },
    },
    // 表格列表数据
    tableList: {
      type: Array,
      default: () => {
        return [
          {
            name: 'asdad',
            age: '222',
            key: 1,
            agesss: 'e2qe',
            sex: 'e2qe',
            ttt: 'e2qe',
            hhh: 'e2qe',
          },
          {
            name: 'asdad',
            age: '222',
            key: 2,

            agesss: 'e2qe',
            sex: 'e2qe',
            ttt: 'e2qe',
            hhh: 'e2qe',
          },
          {
            name: 'asdad',
            age: '222',
            key: 4,
            agesss: 'e2qe',
            sex: 'e2qe',
            ttt: 'e2qe',
            hhh: 'e2qe',
          },
          {
            name: 'asdad',
            age: '222',
            key: 5,
            agesss: 'e2qe',
            sex: 'e2qe',
            ttt: 'e2qe',
            hhh: 'e2qe',
          },
          {
            name: 'asdad',
            age: '222',
            key: 6,
            agesss: 'e2qe',
            sex: 'e2qe',
            ttt: 'e2qe',
            hhh: 'e2qe',
          },
          {
            name: 'asdad',
            age: '222',
            key: 7,
            agesss: 'e2qe',
            sex: 'e2qe',
            ttt: 'e2qe',
            hhh: 'e2qe',
          },
          {
            name: 'asdad',
            key: 10,
            age: '222',
            agesss: 'e2qe',
            sex: 'e2qe',
            ttt: 'e2qe',
            hhh: 'e2qe',
          },
        ];
      },
    },
    //横向滚动条
    scrollX: {
      type: Number,
      required: false,
      default: 0,
    },
    //是否使用antd自带分页器
    ispagination: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    components() {
      return {
        header: {
          cell: (h, props, children) => {
            const { key, ...restProps } = props;
            const col = this.columns.find((col) => {
              const k = col.dataIndex || col.key;
              return k === key;
            });

            if (!col || !col.width) {
              return h('th', { ...restProps }, [...children]);
            }

            const dragProps = {
              key: col.dataIndex || col.key,
              class: 'table-draggable-handle',
              attrs: {
                w: 10,
                x: col.width,
                z: 1,
                axis: 'x',
                draggable: true,
                transform: 'none',
                resizable: false,
              },
              on: {
                dragging: (x, y) => {
                  col.width = Math.max(x, 90);
                },
              },
            };
            const drag = h('vue-draggable-resizable', { ...dragProps });
            return h('th', { ...restProps, class: 'resize-table-th' }, [
              ...children,
              drag,
            ]);
          },
        },
      };
    },
  },
};
</script>
<style>
.resize-table-th {
  position: relative;
}

.table-draggable-handle {
  height: 100% !important;
  bottom: 0;
  position: absolute;
  left: auto !important;
  transform: none !important;
  right: -5px;
  z-index: 100 !important;
  cursor: col-resize;
  touch-action: none;
}
</style>
