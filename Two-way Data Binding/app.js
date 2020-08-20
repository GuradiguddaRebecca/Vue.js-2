//v-model

new Vue({
    el:'#vue-app',
    data:{
       name:'',
       age:''
    },
    methods:{
        logName:function(){
            console.log('you enetered your name');
        },
        logAge:function(){
            console.log('you enetered your age');
        }
     }
    
});