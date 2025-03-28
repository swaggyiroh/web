import { ref, computed, onMounted, onUnmounted } from 'vue';

export function useBackgroundGradient() {
  const bg = ref(Math.random() * 360);
  let intervalId = null;

  onMounted(() => {
    intervalId = setInterval(() => {
      bg.value = (bg.value + 1) % 360;
    }, 50);
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });

  const dynamicBackground = computed(() => {
    return `linear-gradient(${bg.value}deg, hsl(${bg.value}, 80%, 40%) 0%, hsl(${(bg.value + 180) % 360}, 80%, 20%) 100%)`;
  });

  return { dynamicBackground };
}
