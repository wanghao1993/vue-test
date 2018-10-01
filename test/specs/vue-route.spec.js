import MyComponent from '../../src/components/HelloVueRouter'
// import VueRouter from 'vue-router'
import { shallowMount } from '@vue/test-utils'
import $http from '../../src/commom/ajax'
import '../../src/mock'

const $route = {
    path: '/some/path',
    name: 'header',
    params: {
        did: 2
    }
}
  

const wrapper = shallowMount(MyComponent, {
    mocks: {
        $route,
        $http
    },
    stubs: ['router-link', 'router-view']
})


const vm = wrapper.vm
describe('MyComponent', () => {
    it('correctly sets the message when created', () => {
        expect(vm.message).toEqual('bye!')
    })
})
