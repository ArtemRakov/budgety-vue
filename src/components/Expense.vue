<template>
  <div class="item clearfix" :id="'expense-' + item.id">
    <div class="item__description">{{item.description}}</div>
    <div class="right clearfix">
        <div class="item__value">{{item.value}}</div>
        <div class="item__percentage">{{item.percentage}}%</div>
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
