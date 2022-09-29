<template>
    <!--在template标签中添加div就可以解决注解错误-->

<div id="schId"> 
    <h2 ref="msgTitle">{{msg}}</h2>
    <!-- 组件结构 -->
    <h2>学校:{{schoolName}}</h2>
        <h2>地址:{{address}}</h2>
        <button @click ="showname">点击一下</button>
</div>
</template>
<script>
   
    // 组件交互的脚本
   export default{ //导出组件操作
            data() {
                return {
                    msg:'ref属性',
                    schoolName: '吉首大学',
                    address: '张家界'
                }
            },
            methods:{
                showname(event){
                    console.log(this)   //this是组件实例 VC
                    console.log(this.$refs.msgTitle)    //获取 h2 元素

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