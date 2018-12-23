<template>
  <div>
    <div v-if="isMd"><textarea v-model="currentValue"></textarea></div>
    <yimo-editor
      v-model="currentValue"
      :config="config"
      :uploadHandler="uploadHandler"
      v-else
    ></yimo-editor>
  </div>
</template>

<script>
import YimoEditor from 'yimo-vue-editor'
export default {
  name: 'editor',
  components: {
    YimoEditor
  },
  props: {
    value: String,
    isMd: Boolean
  },
  data() {
    return {
      currentValue: this.value,
      config: {
      }
    }
  },
  created() {
    this.config = {
      uploadImgUrl: this.$api.common.getUploadUrl(),
      uploadHeaders: {
        Authorization: localStorage.token
      }
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    uploadHandler(type, resTxt) {
      if (type === 'success') {
        var res = JSON.parse(resTxt)//Do not process the default look at the return value bit image path
        if (res.status !== 1) {
          return null
        }
        return res.data.fileUrl
      } else if (type === 'error') {
        //todo toast
      } else if (type === 'timeout') {
        //todo toast
      }
      return '上传失败__'
    }
  }
}
</script>
