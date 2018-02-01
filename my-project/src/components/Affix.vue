<template>
    <Affix :offset-top="100" @on-change="change">
        <span class="demo-affix">Fix the position at the top of 100px at the top</span>
    </Affix>
</template>
<script>
    export default {
        methods: {
            change (status) {
                this.$Message.info(`Status: ${status}`);
            }
        }
    }
</script>
