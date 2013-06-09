// TODO - this module should be expanded into local_entities!.

/**
 * Implements hook_menu().
 */
function local_users_menu() {
  try {
    var items = {
      "local_users/add":{
        "title":"Add",
        "page_callback":"drupalgap_get_form",
        "page_arguments":["drupalgap_mvc_model_create_form", "local_users", "user"],
        "region":{
          "name":"header",
          "options":{
            "attributes":{
              "data-icon":"add",
              "class":"ui-btn-right"
            }
          },
          "pages":{
            "value":["local_users/list"],
            "mode":"include",
          }
        }
      },
      "local_users/list":{
        "title":"Local Users",
        "page_callback":"local_users_list_page"
      }
    };
    return items;
  }
  catch (error) {
    alert('local_users_menu - ' + error);
  }
}

/**
 * Returns the add local user form.
 */
function local_users_add_form() {
  try {
    var form = {
      'id':'local_users_add_form', /* TODO - the id should be auto set by DG, it
                                      is always equal to the function name */
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
 * The submit handler for the add local user form.
 */
function local_users_add_form_submit(form, form_state) {
  try {
    
  }
  catch (error) {
    alert('local_users_add_form_submit - ' + error);
  }
}

/**
 * Implements hook_install().
 */
function local_users_install() {
  try {
    // If there isn't an entry for 'local_users' in the local storage, add it.
    var local_users = window.localStorage.getItem('local_users');
		if (!local_users) {
			local_users = [];
			window.localStorage.setItem('local_users', local_users);
		}
  }
  catch (error) {
    alert('local_users_install - ' + error);
  }
}

/**
 * Page callback for local_users/list
 */
function local_users_list_page() {
  try {
    // Build a list of users.
    var content = {
      'local_users_list_items':{
        'theme':'jqm_item_list',
        'title':'Local Users',
        'attributes':{'id':'local_users_list_items'},
      }
    };
    var local_users = collection_load('local_users', 'user');
    if (local_users) {
      var items = [];
      $.each(local_users, function(uid, user){
          items.push(l(user.name, ''));
      });
      content.local_users_list_items.items = items;
    }
    return content;
  }
  catch (error) {
    alert('local_users_list_page - ' + error);
  }
}

/**
 * Loads the local_users array from local storage and returns it. Otherwise,
 * returns false.
 */
function local_users_load_users() {
  try {
		var local_users = window.localStorage.getItem('local_users');
		if (local_users) {
			return JSON.parse(local_users);
		}
		else {
			return false;
		}
  }
  catch (error) {
    alert('local_users_load_users - ' + error);
  }
}

/**
 * Implements hook_mvc_model().
 */
function local_users_mvc_model() {
  var models = {
    "user":{
      "primary_key":"uid",
      "fields":{
        "name":{
          "type":"textfield",
          "title":"Name",
          "required":true
        },
        "mail":{
          "type":"email",
          "title":"E-mail Address",
          "required":false
        }
      }
    }
  };
  return models;
}

/**
 * Implements hook_deviceready().
 */
function local_users_deviceready() {
  try {
    // For now, we don't want the deviceready to continue execution.
    return false;
  }
  catch (error) {
    alert('local_users_deviceready - ' + error);
  }
}

