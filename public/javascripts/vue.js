$(document).ready(function () {

  //{text, id}

  //VUE INSTANCE
  var app = new Vue({
    el: '#vue_container',
    data: {
      app_title: 'MY TODOS',
      input_value: '',
      show_input: false,
      tasks: [],
      selected_categories: [],
      options: ['llamar', 'enviar correo', 'enviar sms', 'no hacer nada'],
      action_selected: 'enviar sms'
    },
    methods: {
      addTask () {
        if(this.input_value.length) {
          let value = this.input_value;
          let task_id = Date.now();
          this.tasks.push({text:value,id: task_id, completed:false})
          this.input_value = '';
        }
      }
    },
    computed: {
      completedTasks () {
        let completed = this.tasks.filter((val) => {
          return val.completed;
        });
        return completed;
      },
      todoTasks () {
        let todo = this.tasks.filter((val) => {
          return !val.completed;
        });
        return todo;
      }
    }
  });

});
