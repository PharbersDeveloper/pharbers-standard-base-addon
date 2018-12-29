import Component from '@ember/component';
import layout from '../templates/components/base-button';

export default Component.extend({
  layout,
  attributeBindings: ['style'],
  style: 'display:inline-block',
  positionalParams: ['params'],
  actions: {
    click: function() {
			//  发送到控制器中的方法，
			this.sendAction("onClick", this.get('params'));
    },
	}
});
