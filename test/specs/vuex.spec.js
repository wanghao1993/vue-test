import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Actions from '../../src/components/HelloVuex'

// 创建一个本地拷贝防止原来的Vue实例被污染
const localVue = createLocalVue()

localVue.use(Vuex)
const $route = {
    path: '/some/path',
    name: 'header',
    params: {
        did: 2
    }
}
  

let wrapper
let actions
let store

describe('Actions.vue', () => {
    beforeEach(() => {
        actions = {
            actionInput: jasmine.createSpy('actionInput')
        }
        store = new Vuex.Store({
            state: {},
            actions
        })

        wrapper = shallowMount(Actions, {
            mocks: {
                $route
            },
            store, localVue,
            stubs: ['router-link', 'router-view']
        })
    })
    
  it('当事件的值是“input”时会 dispatch“actionInput”', () => {
    const input = wrapper.find('input')
    input.element.value = 'input'
    input.trigger('input')
    expect(actions.actionInput).toHaveBeenCalled()
  })

  it('当事件的值不是“input”时不会 dispatch “actionInput”', () => {
    const input = wrapper.find('input')
    input.element.value = 'not input'
    input.trigger('input')
    expect(actions.actionInput).not.toHaveBeenCalled()
  })
})