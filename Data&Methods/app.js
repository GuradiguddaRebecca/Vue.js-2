//create vue instance
//we can have one instance or multiple
//search box,friendlist, are two different widgets where we create two vue instances

new Vue({
    el:'#vue-app',//which element is in control
    data:{
        name:'Rebecca',
        job:'Developer'
    },//stores key value pairs, stores data
    methods:{
        greet:function(time){
            
            return 'Good' +' '+ time +' '+ this.name;
        }
    }
});