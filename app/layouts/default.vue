<script setup lang="ts"></script>

<template>
  <div>
    <UContainer class="sm:border-x border-default pt-10 overflow-hidden">
      <AppHeader :links="navLinks" />
      <div class="relative">
        <div class="absolute top-0 left-0 w-full h-[600px] -z-1">
          <BackgroundParticle />
        </div>
        <slot />
      </div>
      <AppFooter />
    </UContainer>
  </div>
</template>
