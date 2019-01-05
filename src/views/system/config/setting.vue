<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-form
          :label-width="$codes.form_label_width"
          v-loading="submit_loading"
        >
          <template v-for="item in list">
            <el-form-item
              :label="item.displayName"
              :key="item.key"
            >
              <el-input
                v-model="item.value"
                type="text"
                v-if="item.type==='Text'"
              ></el-input>
              <el-input
                v-model="item.value"
                type="number"
                v-else-if="item.type==='Number'"
              ></el-input>
              <el-input
                v-model="item.value"
                type="textarea"
                v-else-if="item.type==='TextArea'||item.type==='Json'"
              ></el-input>
              <v-form-editor
                v-model="item.value"
                v-else-if="item.type==='Editor'"
              ></v-form-editor>
            </el-form-item>
          </template>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit"
            >保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VFormEditor from '@/components/VForm/Editor'
export default {
  components: {
    VFormEditor
  },
  data() {
    return {
      list: [],
      submit_loading: false
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.submit_loading = true
      this.$api.system.getConfigSetting().then(res => {
        this.list = res.data
        this.submit_loading = false
      })
    },
    onSubmit() {
      const form = {}
      this.list.forEach(s => {
        form[s.key] = s.value
      })
      this.$api.system.updateConfigSetting(form).then(res => {
        if (res.status === 0) return
        this.$ui.pages.success(res.msg)
        this.loadData()
      })
    }
  }
}
</script>
