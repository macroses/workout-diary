<template>
  <div class="pagination-box">
    <Paginate
        :page-count="pageCount"
        :page-range="3"
        :margin-pages="2"
        :click-handler="onPaginateClick"
        :prev-class="'prev-class'"
        :next-class="'next-class'"
        :next-text="''"
        :prev-text="''"
        :container-class="'pagination'"
        :page-class="'page-item'"
    >
    </Paginate>
    <div class="dropdown-box">
      Отображать на странице:
      <Dropdown
        @selectOption="getPageCountNumber"
        :options="pageCountArray"/>
    </div>

  </div>
</template>

<script setup>
import Paginate from 'vuejs-paginate-next'
import Dropdown from "@/components/UI/Dropdown";

const pageCountArray = [
  {id: 1, val: 5, iconName: ''},
  {id: 2, val: 10, iconName: ''},
  {id: 3, val: 15, iconName: ''},
  {id: 4, val: 20, iconName: ''},
]

const emit = defineEmits()

const props = defineProps({
  pageCount: Number,
})

const getPageCountNumber = (num) => {
  emit('getPageCountNumber', num)
}

const onPaginateClick = (e) => {
  emit('onPaginateClick', e)
}
</script>

<style lang="scss" scoped>
.pagination-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-box {
  color: var(--c-text-light);
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>