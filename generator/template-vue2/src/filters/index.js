/**
 * @description 定义过滤器模块
 */

import Vue from 'vue';
import { formatDate } from 'utils';

// register global utility filters.
export const filters = {
  formatDate
};

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
