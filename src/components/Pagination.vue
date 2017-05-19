<template>
    <div class="ui pagination menu clear small">
        <button :disabled="data.cur === 1" class="item ui button disabled">
            <span>上一页</span>
        </button>
        <button class="item ui button disabled"><span>1</span></button>
        <button class="item ui button disabled"><span>2</span></button>
        <button class="item ui button disabled"><span>3</span></button>
        <button class="item ui button disabled"><span>4</span></button>
        <button :disabled="data.cur === data.total" class="item ui button">
            <span>下一页</span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Pagination',
        props: ['data']
    }
</script>