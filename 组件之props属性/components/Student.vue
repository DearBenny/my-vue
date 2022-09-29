<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>姓名:{{name}}</h2>
        <h2>性别:{{sex}}</h2>
        <h2>年龄:{{addAge}}</h2>


    </div>
</template>

<script>
    export default{
        data() {
            return {
            //   name:'Spoit' ,
            //   age:18
            msg:'props 接收传递过来的值',
            addAge:Number(this.age)+2
            }
        },
        // 简单声明接收
        // props:['name','sex','age']
        //接收的同时对数据进行类型限制

        // props:{
        //     "name":String,
        //     "sex":String,
        //     "age":Number
        // }

        //接收的同时对数据进行类型限制、默认值的指定、必须性的限制

        props:{
            "name":{
                type:String,    //限制 name的属性类型必须是String
                required:true   //限制name属性是必传值
            },
            "sex":{
                type:String,    //限制 name的属性类型必须是String
                required:true   //限制name属性是必传值
            },
            "age":{
                type:Number,   
                default:99  //默认值 
            }
            
        }


    }
</script>

<style>
    #schId{
        background-color: tomato;
    }
</style>