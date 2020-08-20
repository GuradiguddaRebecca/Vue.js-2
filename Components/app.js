//component is a reusable piece of code or templates which can be used in diff templates
//data must be a function in component unlike in vue instance and should return object
//There will be multiple instances using a component and if we just use a plain object instead of function,
//if we change any data from any of the instance it is going  to change in all the instance which is sharing the object
//If we create a function there will be a fresh copy for each instance

Vue.component('greeting',{
    template:'<p>Hey There,Iam {{name}} component  <button v-on:click="changeName">Change Name</button></p>',
    data:function(){
        return {
            name:'Rebecca'
        }
    },
    methods:{
        changeName:function(){
            this.name='Mary';
        }
    }
});


new Vue({
    el:'#vue-app-one',
});

new Vue({
    el:'#vue-app-two',
});