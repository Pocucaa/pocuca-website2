<template>
  <div class="flex justify-center items-center h-screen">
    <button
      v-if="useAppStore().currentEventView != EventView.FOCUSED"
      @click="useAppStore().setFocusedEventView()"
      type="button"
      class="btn text-white bg-blue-500 px-4 py-2 rounded-md shadow-lg hover:bg-blue-600"
    >
      Show All PDF
    </button>
    <div
      v-if="useAppStore().currentEventView == EventView.FOCUSED"
      class="card bg-gray-100 rounded-lg shadow-lg p-6 w-1/2 mr-4"
    >
      <!-- Show only one PDF at a time -->
      <iframe :src="currentPDFPath" class="pdf-viewer"></iframe>
    </div>
    <div v-if="useAppStore().currentEventView == EventView.FOCUSED">
      <button
        @click="selectPreviousPDF"
        type="button"
        class="btn text-white bg-blue-500 px-4 py-2 rounded-l-md shadow-lg hover:bg-blue-600"
      >
        Previous
      </button>
      <button
        @click="selectNextPDF"
        type="button"
        class="btn text-white bg-blue-500 px-4 py-2 rounded-r-md shadow-lg hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import ispit1 from '@/assets/oet1/ispit8 (1).pdf'
import ispit2 from '@/assets/oet1/ispit8 (2).pdf'
import { EventView, useAppStore } from '@/stores/appStore'
import { ref } from 'vue'
// List of PDF filenames in the assets folder
const pdfList = [
  ispit1,
  ispit2,
  ispit1
  // Add more filenames here as needed
]

// Index to track the current PDF in the list
const currentPDFIndex = ref(0)

// Function to get the path of the current PDF
const currentPDFPath = ref(pdfList[currentPDFIndex.value])

// Function to select the previous PDF
const selectPreviousPDF = () => {
  currentPDFIndex.value = (currentPDFIndex.value - 1 + pdfList.length) % pdfList.length
  currentPDFPath.value = pdfList[currentPDFIndex.value]
}

// Function to select the next PDF
const selectNextPDF = () => {
  currentPDFIndex.value = (currentPDFIndex.value + 1) % pdfList.length
  currentPDFPath.value = pdfList[currentPDFIndex.value]
}
</script>

<style scoped>
.pdf-viewer {
  width: 100%;
  height: 80vh; /* Adjust height as needed */
  border: none;
}
.btn {
  margin: 0.5rem;
}
</style>
