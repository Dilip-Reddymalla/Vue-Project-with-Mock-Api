<template>
    <div class="container">
        <H1>This page is to edit the employee data</H1>
        <PutComp />
    </div>
</template>

<script>
import PutComp from '@/components/PutComp.vue';

export default{
    name:"PutData",
    components:{
        PutComp,
    },

}
</script>