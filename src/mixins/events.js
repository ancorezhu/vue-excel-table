export default {
  methods: {
    selectionChange() {
      const { states } = this.store;
      const selection = this.store.states.showData.filter((item, index) => states.dataStatusList[index].checked);
      this.$emit('selection-change', selection);
      if (states.dataStatusList.every((item) => item.checked)) {
        this.$refs.theader.checkedAll = true;
        this.$refs.fixedTheader.checkedAll = true;
      } else {
        this.$refs.theader.checkedAll = false;
        this.$refs.fixedTheader.checkedAll = false;
      }
    },
    cellChange(row, column, event) {
      // console.log(value);
      this.$emit('cell-change', row, column, event);
    },
    cellBlur(row, column, event) {
      this.$emit('cell-blur', row, column, event);
    },
  },
};
