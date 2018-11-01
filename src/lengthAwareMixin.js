export const lengthAwareMixin = {
  computed: {
    lengthAware(){
      return this.stringReturn + " (" + this.stringReturn.length + ")";
    }
  }
};