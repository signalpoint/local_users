/**
 * Implements hook_menu().
 */
function local_users_menu() {
  try {
    var items = {
      'local_users/add':{
        'title':'Add Local User',
        'page_callback':'drupalgap_get_form',
        'page_arguments':['local_users_add_form'],
      },
      'local_users/list':{
        'title':'Local Users',
        'page_callback':'local_users_list_page',
      }
    };
    return items;
  }
  catch (error) {
    alert(' - ' + error);
  }
}

/**
 * Returns the add local user form.
 */
function local_users_add_form() {
  try {
    var form = {
      'id':'local_users_add_form',
      'elements':{
        'name':{
          'type':'textfield',
          'title':'Name',
          'required':true,
        },
        'mail':{
          'type':'email',
          'title':'E-mail address',
          'required':false,
        },
        'submit':{
          'type':'submit',
          'value':'Add',
          'attributes':{'data-icon':'plus'},
        },
      },
    };
    return form;
  }
  catch (error) {
    alert('local_users_add_form - ' + error);
  }
}

/**
 * Page callback for local_users/list
 */
function local_users_list_page() {
  try {
    var content = {
      'local_users_list_items':{
        'theme':'jqm_item_list',
        'title':'Local Users',
        'items':[],
        'attributes':{'id':'local_users_list_items'},
      }
    };
    return content;
  }
  catch (error) {
    alert('local_users_list_page - ' + error);
  }
}

