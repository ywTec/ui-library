<template>
    <button class="yw-button" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import './index.less';

const Props = {
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    },
}

export default defineComponent({
    name: 'YwButton',
    props: Props,
    setup() {
        return {
        }
    }
})
</script>
<style lang="less">

</style>