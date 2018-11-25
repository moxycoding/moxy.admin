export default {
  props: {
    auth: String,
    type: String,
    icon: String,
    text: String,
    disabled: Boolean,
    loading: Boolean,
    size: {
      type: String,
      default: 'small'
    }
  },
  methods: {
    click_handle() {
      this.$emit('click')
    }
  }
}
