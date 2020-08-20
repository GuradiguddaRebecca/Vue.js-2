//v-bind and v-html
new Vue({
    el:'#vue-app',//which element is in control
    data:{
        name:'Rebecca',
        job:'Developer',
        website:'http://www.google.com',
        websiteTag:'<a href="https://www.google.com">Google website</a>'
    },//stores key value pairs, stores data
    methods:{
        greet:function(time){
            
            return 'Good' +' '+ time +' '+ this.name;
        }
    }
});