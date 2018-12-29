import Component from '@ember/component';
import layout from '../templates/components/base-select';

export default Component.extend({
  layout,
  attributeBindings: ['style'],
  style: 'display:inline-block',
  actions: {
    onChange: function() {
			//  发送到控制器中的方法，
			// this.sendAction("onChange");
    },
  }
});
