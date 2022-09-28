<template>
    <!-- 在template标签中添加div就可以解决注解错误的问题 -->
    <div id="schID">
        <!-- 组件的结构 -->
        <h2>学校：{{schoolName}}</h2> 
        <h2>地址：{{address}}</h2> 
    </div>
</template>

<script>
    // 组件交互相关的代码
    const school = {
                data(){
                    return {    //组件必须要写成返回值的形式
                        schoolName:'吉首大学',
                        address:'张家界'
                    }
                },
                methods:{
                    showname(){
                        alert(this.schoolName)
                    }
                }
                

            }
</script>

<style>
    /* 样式区域 */

    #schId{
        background-color: aqua;
    }
</style>