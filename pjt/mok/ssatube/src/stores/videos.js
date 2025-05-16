import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useVideoStore = defineStore('video', () => {
  
  let selectedItemId = ref('')
  const videoList = ref([])
  
  const searchVideo = function (keyword) {
   axios ({
    method: 'get', 
    url: 'https://www.googleapis.com/youtube/v3/search', 
    params: {
      part: 'snippet', 
      q: 'ssafy', 
      type: 'video', 
      key: 'AIzaSyDJrkVMBQXR-Dl7kwUAb9XNL7txnw1sGbE'
    }
   })
   .then(function (response) {
     // id: items.id.videoId
     // thumbnail: items.snippet.thumbnails.default.url - iframe
     // title: items.snippet.title
     videoList.value = response.data.items.map(function (item) {
      return {
        id: item.id.videoId, 
        thumbnail: item.snippet.thumbnails.default.url, 
        title: item.snippet.title, 
      }
    })
    selectedItemId.value = videoList.value[0].id
   })
   .catch(function (error) {
    console.log(error)
   })
  }

  const updateSelectedItemId = function (newId) {
    selectedItemId.value = newId
  }

  return {
    videoList, selectedItemId, 
    searchVideo, updateSelectedItemId, 
  }
})
