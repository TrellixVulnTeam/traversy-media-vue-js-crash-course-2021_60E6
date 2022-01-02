<template>
    <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: String,
            color: String,
        },
        methods: {
            onClick() {
                console.log("[DEBUG MSG][Button::event]: click on [",this.text,"] button")
                this.$emit('btn-click')
            }
        }  
    }

</script>