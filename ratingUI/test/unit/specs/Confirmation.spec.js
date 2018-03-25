import Vue from 'vue'
import Confirmation from '@/components/Confirmation'

describe('Confirmation.vue', () => {
  it('renders the correct heading', () => {
    const Constructor = Vue.extend(Confirmation)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.new-score h1').textContent)
      .toEqual('Thanks for your feedback')
  })
})
