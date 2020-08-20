//Events, directive v-on:
new Vue({
    el:'#vue-app',
    data:{
       age:23,
       X:0,
       Y:0
    },
    methods:{
        add:function(inc){
            this.age += inc;
        },
        subtract:function(dec){
            this.age -= dec;
        },
        updateXY:function(event){
            this.X = event.offsetX;
            this.Y = event.offsetY;
        },
        click:function(){
        alert('You clicked me');
        }
     }
    
});