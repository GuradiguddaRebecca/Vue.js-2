//computed properties
//very similar to methods
//In methods, vuejs doesnt know which method to run. So through computed properties vue js runs only the method which is being computed


new Vue({
    el:'#vue-app',
    data:{
       age:23,
       a:0,
       b:0
    },
    methods:{
    //    addToA:function(){
    //        console.log('addToA');
    //        return this.a + this.age;
    //    },
    //    addToB:function(){
    //        console.log('addToB');
    //        return this.b + this.age;
    //   }
    },
    computed:{
        addToA:function(){
            console.log('addToA');
            return this.a + this.age;
        },
        addToB:function(){
            console.log('addToB');
            return this.b + this.age;
       }
    }
});