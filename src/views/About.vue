<template>
  <div id="app">
    <a-form-model :inline="true" :model="form">
      <a-form-model-item label="选择日期">
        <a-date-picker
          @change="handleDateChange"
          v-model="form.date"
          placeholder="选择日期"
        >
        </a-date-picker>
      </a-form-model-item>
      <a-form-model-item label="选择时间">
        <a-time-picker
          v-model="form.time"
          placeholder="选择时间"
          format="HH:mm"
          :disabledHours="pickerOptions.disabledHours"
          :disabledMinutes="pickerOptions.disabledMinutes"
          :minute-step="30"
          value-format="HH:mm"
        >
        </a-time-picker>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      form: {
        date: '',
        time: '',
      },
      pickerOptions: {
        disabledHours: () => [],
        disabledMinutes: () => [],
      },
    };
  },
  methods: {
    handleDateChange(date) {
      this.form.time = null;
      const selectedDate = moment(date).format('YYYY-MM-DD');
      console.log(selectedDate);
      const today = moment().format('YYYY-MM-DD');
      console.log(today);

      if (selectedDate == today) {
        // 如果选择的是今天
        this.pickerOptions = {
          disabledHours: this.disabledHours,
          disabledMinutes: this.disabledMinutes,
        };
      } else {
        // 如果选择的是之前的日期
        this.pickerOptions = {
          disabledHours: () => [],
          disabledMinutes: () => [],
        };
      }
    },
    disabledHours() {
      const now = new Date();
      const currentHour = now.getHours();
      let hours = [];
      for (let i = currentHour + 1; i < 24; i++) {
        hours.push(i);
      }
      return hours;
    },
    disabledMinutes(hour) {
      const now = new Date();
      if (hour === now.getHours()) {
        let minutes = [];
        const currentMinute = now.getMinutes();
        for (let i = Math.ceil((currentMinute + 1) / 30) * 30; i < 60; i++) {
          minutes.push(i);
        }
        return minutes;
      }
      return [];
    },
  },
};
</script>
