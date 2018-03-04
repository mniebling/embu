import Vue from 'vue'
import AppComponent from './components/App.vue'

const app = new Vue(
  { el: '#app'
  , template: `<app></app>`
  , render: h => h(AppComponent)
  , components:
    { AppComponent
    }
  })
