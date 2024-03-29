import Vue from 'vue';
import Bar from './chart/bar.vue';
import Line from './chart/line.vue';
import Lines from './chart/lines.vue';
import tableBar from './table-bar/table-bar.vue';

const components = [
  {
    name: 'scBar',
    component: Bar,
  },
  {
    name: 'scLine',
    component: Line,
  },
  {
    name: 'scLines',
    component: Lines,
  },
  {
    name: 'scTableBar',
    component: tableBar,
  },
];

components.forEach((component) => {
  Vue.component(component.name, component.component);
});
