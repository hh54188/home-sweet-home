<template>
    <div v-if="pageRange.length <= 7" class="ui pagination menu clear small">
        <button @click="gotoPage(data.cur - 1)" :disabled="data.cur === 1" class="item ui button">
            <span>上一页</span>
        </button>
        <button @click="gotoPage(page)" v-for="page in pageRange" :disabled="page === data.cur" class="item ui button">
            <span>{{page}}</span>
        </button>
        <button @click="gotoPage(data.cur + 1)" :disabled="data.cur === data.total" class="item ui button">
            <span>下一页</span>
        </button>
    </div>
    <div class="ui pagination menu clear small" v-else-if="pageRange.length > 7 && data.cur <= 4">
        <button @click="gotoPage(data.cur - 1)" :disabled="data.cur === 1" class="item ui button">
            <span>上一页</span>
        </button> 
        <button @click="gotoPage(1)" :disabled="data.cur === 1" class="item ui button"><span>1</span></button>        
        <button @click="gotoPage(2)" :disabled="data.cur === 2" class="item ui button"><span>2</span></button>        
        <button @click="gotoPage(3)" :disabled="data.cur === 3" class="item ui button"><span>3</span></button>        
        <button @click="gotoPage(4)" :disabled="data.cur === 4" class="item ui button"><span>4</span></button>        
        <button @click="gotoPage(5)" class="item ui button"><span>5</span></button>        
        <button disabled class="item ui button"><span>...</span></button>        
        <button @click="gotoPage(data.total)" class="item ui button"><span>{{data.total}}</span></button>        
        <button @click="gotoPage(data.cur + 1)" :disabled="data.cur === data.total" class="item ui button">
            <span>下一页</span>
        </button>            
    </div>
    <div class="ui pagination menu clear small" v-else-if="pageRange.length > 7 && data.cur >= data.total - 3">
        <button @click="gotoPage(data.cur - 1)" :disabled="data.cur === 1" class="item ui button">
            <span>上一页</span>
        </button> 
        <button @click="gotoPage(1)" class="item ui button"><span>1</span></button>        
        <button disabled class="item ui button"><span>...</span></button>        
        <button @click="gotoPage(data.total - 4)" class="item ui button"><span>{{data.total - 4}}</span></button>        
        <button @click="gotoPage(data.total - 3)" :disabled="data.cur === (data.total - 3)" class="item ui button"><span>{{data.total - 3}}</span></button>        
        <button @click="gotoPage(data.total - 2)" :disabled="data.cur === (data.total - 2)" class="item ui button"><span>{{data.total - 2}}</span></button>        
        <button @click="gotoPage(data.total - 1)" :disabled="data.cur === (data.total - 1)" class="item ui button"><span>{{data.total - 1}}</span></button>        
        <button @click="gotoPage(data.total)" :disabled="data.cur === data.total" class="item ui button"><span>{{data.total}}</span></button>        
        <button @click="gotoPage(data.cur + 1)" :disabled="data.cur === data.total" class="item ui button">
            <span>下一页</span>
        </button>        
    </div>
    <div class="ui pagination menu clear small" v-else>
        <button @click="gotoPage(data.cur - 1)" class="item ui button">
            <span>上一页</span>
        </button> 
        <button @click="gotoPage(1)" class="item ui button"><span>1</span></button>        
        <button class="item ui button disabled"><span>...</span></button>    
        <button @click="gotoPage(data.cur - 1)" class="item ui button"><span>{{data.cur - 1}}</span></button>        
        <button @click="gotoPage(data.cur)" disabled class="item ui button"><span>{{data.cur}}</span></button>        
        <button @click="gotoPage(data.cur + 1)" class="item ui button"><span>{{data.cur + 1}}</span></button>            
        <button class="item ui button disabled"><span>...</span></button>        
        <button @click="gotoPage(data.total)" class="item ui button"><span>{{data.total}}</span></button>        
        <button @click="gotoPage(data.cur + 1)" class="item ui button">
            <span>下一页</span>
        </button>      
    </div>    
</template>

<script>
    export default {
        name: 'Pagination',
        props: ['data', 'pageAction'],
        methods: {
            gotoPage(pageNum) {
                this.$store.dispatch(this.pageAction, pageNum)
            }
        },
        computed: {
            pageRange() {
                let seed = 1;
                let result = [];
                while (seed <= this.data.total) {
                    result.push(seed++);
                }
                return result;
            }
        }
    }
</script>