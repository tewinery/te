<template>
  <transition name="modal">
    <div class="modal-mask" :class="modalMaskClass" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer" v-if="!!$slots['footer']">
            <button class="button modal-default-button" @click="$emit('close')" style="white-space: normal;">
              <slot name="footer"></slot>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',

    props: ['modalMaskClass'],
  }
</script>
