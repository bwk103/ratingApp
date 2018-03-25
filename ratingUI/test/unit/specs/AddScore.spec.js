import Vue from 'vue'
import AddScore from '@/components/AddScore'

describe('AddScore.vue', () => {
  it('renders the correct heading', () => {
    const Constructor = Vue.extend(AddScore)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.new-score h1').textContent)
      .toEqual('Help us to improve our website.')
  })
  it('renders the correct subheading', () => {
    const Constructor = Vue.extend(AddScore)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.new-score h3').textContent)
      .toEqual('To help us to continually improve our service, please tell us how you rated your experience of the FT website.')
  })
})
