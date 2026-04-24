<template>
    <div class="container">
        <h2>This page is to delte employee data</h2>
        <DeleteComp />

    </div>
</template>

<script>
import DeleteComp from '@/components/DeleteComp.vue';
export default{
    name:"DeleteData",
    components:{
        DeleteComp,
    }
}
</script>