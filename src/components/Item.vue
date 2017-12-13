<template>
  <div class="item clearfix" :id="item.type + '-' + item.id">
    <div class="item__description">{{item.description}}</div>
    <div class="right clearfix">
        <div class="item__value">{{item | itemShow}}</div>
        <div v-if="item.type === 'exp' && item.percentage > 0" class="item__percentage">{{item.percentage}}%</div>
        <div class="item__delete">
            <button @click='deleteItem' class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    deleteItem() {
      this.$emit('deleteItem', this.item)
    }
  }
}
</script>
