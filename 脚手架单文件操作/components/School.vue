<template>
    <!--在template标签中添加div就可以解决注解错误-->

<div id="schId"> 
    <!-- 组件结构 -->
    <h2>学校:{{schoolName}}</h2>
        <h2>地址:{{address}}</h2>
</div>
</template>
<script>
   
    // 组件交互的脚本
   export default{ //导出组件操作
            data() {
                return {
                    schoolName: '吉首大学',
                    address: '张家界'
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
        background-color: aquamarine;
    }
</style>