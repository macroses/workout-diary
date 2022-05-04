<template>
  <Suspense>
    <li 
      v-for="(exerciseGroup, index) in exerciseGroups"
      :key="exerciseGroup.id"
      @click="selectGroupId(exerciseGroup.id, index)"
      class="exercisegroup-item"
      :class="{active: index === activeGroupNameItem}"
      :style="[index === activeGroupNameItem  ? `background-color: rgb(${store.currentTaskColor})`: ''] "
    >
      <Icon :iconName="exerciseGroup.iconName"/>
      {{exerciseGroup.groupName}}
    </li>
    <template #fallback>
      ...loading
    </template>
  </Suspense>
</template>

<style lang="scss" scoped>

</style>