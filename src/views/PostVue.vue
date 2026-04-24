<template>
    <div>
        <h1>This page demosrate post requests </h1>
        <PostComp />
    </div>
    
</template>

<script>
import PostComp from '@/components/PostComp.vue';
export default{
    name:"PostView",
    components:{
        PostComp,
    }
}
</script>