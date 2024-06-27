<template>
  <el-select collapse-tags v-model="value" multiple placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
        { value: '4', label: 'Option 4' },
        { value: '5', label: 'Option 4' },
        { value: '6', label: 'Option 4' },
        { value: '7', label: 'Option 4' },
        { value: '8', label: 'Option 4' },
        { value: '9', label: 'Option 4' },
        { value: '11', label: 'Option 4' },
        { value: '35', label: 'Option 4' },
        { value: '235', label: 'Option 4' },
        { value: '2351', label: 'Option 4' },
      ],
    };
  },
};
</script>

<style scoped>
/* 自定义 select 多选后的 tag 样式 */
</style>
