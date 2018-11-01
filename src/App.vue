<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-local-color:click="clicked">A wizard is never late, Frodo Baggins. Also color this background a color
                    click meeeeeee
                </button>

            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{text | reverseText}}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{stringReturn | wordReturn }} </p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>{{reversed}}</p>
                <p>{{lengthAware}}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import {lengthAwareMixin} from "./lengthAwareMixin.js";

    export default {
      directives:{
        'local-color':{
           bind(el, binding, vnode){

             const type = binding.arg;
             const fn = binding.value;

             el.addEventListener(type, fn);


             // if(binding.arg === 'click'){
             //   el.style.backgroundColor = binding.value;
             //   el.style.color = 'white';
             // }else{
             //   el.style.backgroundColor = 'blue';
             //   el.style.color = 'white';
             // }
           }
        }
      },
      mixins: [lengthAwareMixin],

      data(){
        return{
          text: 'Naomi',
          stringReturn: 'return this'
        }
      },
      methods: {
        clicked(){
          alert('was Clicked!');
        }
      },
      filters:{
        reverseText(value){
          return value.split("").reverse().join("");
        },
        computed: {
          reversed(){
            return this.text.split("").reverse().join("");
          },
          lengthAware(){
            return this.stringReturn + " (" + this.stringReturn.length + ")";
          }
        }
      }
    }
</script>

<style>
</style>
