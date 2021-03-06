import Controller from '@ember/controller';

export default Controller.extend({
  page: 1,
  queryParams: ['page'],

  actions: {
    queryChanged() {
      // reset page
      this.set('page', 1);
    }
  }
});
