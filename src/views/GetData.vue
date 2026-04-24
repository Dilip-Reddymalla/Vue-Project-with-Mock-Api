<template>
    <div class="container">
        <h1>This page shows the employee data in formated table</h1>
        <GetComp />
    </div>
</template>

<script>
import GetComp from '@/components/GetComp.vue';
export default{
    name:"GetData",
    components:{
        GetComp,
    }
}

</script>