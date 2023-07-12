import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp({
  template: `
    <div>
      <h1>{{ count }}</h1>
      <input v-bind:value="value" v-on:input='input'/>
      {{value}}
      {{error}}
    <div v-for='number in numbers'>
        <div v-bind:class="getClass(number)">{{number}} <span v-if='isEven(number)'>Even</span><span v-else>Odd</span></div>
    </div>
    <h1>Even list</h1>
     <div v-for='number in evenList'>
        {{number}} 
    </div>
      <button v-on:click="increment">Increment</button>
    </div>
  `,
  data() {
    return {
      count: 0,
      value: '',
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  computed: {
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },
    error() {
      if (this.value.length < 5) {
        return 'Must enter correct value';
      }
    },
  },
  methods: {
    input(e) {
      this.value = e.target.value;
    },
    increment() {
      this.count++;
    },
    isEven(number) {
      return number % 2 === 0;
    },
    getClass(num) {
      return this.isEven(num) ? 'red' : 'blue';
    },
  },
});

app.mount('#app');
