import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// Define the enum for the views
export enum EventView {
  DEFAULT = 'default',
  FOCUSED = 'focused'
}

// Define the store
export const useAppStore = defineStore('app', () => {
  // Define a ref to store the current view, defaulting to 'default'
  const currentEventView = ref<EventView>(EventView.DEFAULT)

  // Define methods to update the current EventView
  const setDefaultEventView = () => {
    currentEventView.value = EventView.DEFAULT
  }

  const setFocusedEventView = () => {
    currentEventView.value = EventView.FOCUSED
  }

  // Define computed properties to access the current EventView
  const isDefaultEventView = computed(() => currentEventView.value === EventView.DEFAULT)
  const isFocusedEventView = computed(() => currentEventView.value === EventView.FOCUSED)

  return {
    currentEventView,
    setDefaultEventView,
    setFocusedEventView,
    isDefaultEventView,
    isFocusedEventView
  }
})
