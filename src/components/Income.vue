<template>
  <div class="item clearfix" :id="'income-' + item.id">
    <div class="item__description">{{item.description}}</div>
    <div class="right clearfix">
        <div class="item__value">{{item.value | plus}}</div>
        <div class="item__delete">
            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

