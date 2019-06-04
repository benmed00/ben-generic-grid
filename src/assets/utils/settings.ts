export const CONFIG_SETTINGS =
  {
    add: {
      addButtonContent: '<i class=\'nb-plus\'></i>',
      createButtonContent: '<i class=\'nb-checkmark\'></i>',
      cancelButtonContent: '<i class=\'nb-close\'></i>',
      confirmCreate: 'true'
    },
    edit: {
      editButtonContent: '<i class=\'nb-edit\'></i>',
      saveButtonContent: '<i class=\'nb-checkmark\'></i>',
      cancelButtonContent: '<i class=\'nb-close\'></i>',
      confirmSave: 'true'
    },
    delete: {
      deleteButtonContent: '<i class=\'nb-trash\'></i>',
      confirmDelete: 'true'
    },
    selectMode: 'multi',
    columns: {
      id: {
        title: 'ID',
        editable: 'false',
        addable: 'false',
        type: 'number',
        notShownField: 'true',
        hideHeader: 'true'
      },
      firstName: {
        title: 'First Name',
        type: 'string',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              {
                value: 'jacob',
                title: 'jacob'
              },
              {
                value: 'hcglwjlwcgwwcgwcwj',
                title: 'hcglwjlwcgwwcgwcwj'
              },
              {
                value: 'Med',
                title: 'Med'
              }
            ]
          }
        },
        notShownField: 'false'
      },
      lastName: {
        title: 'Last Name',
        type: 'string'
      },
      username: {
        title: 'Username',
        type: 'html'
      },
      email: {
        title: 'E-mail',
        type: 'html',
        filter: {
          type: 'completer',
          config: {
            completer: {
              data: 'this.source',
              searchFields: 'completer',
              titleField: 'email'
            }
          }
        },
        editor: {
          type: 'text',
          value: '<input  type=\'email\'>'
        }
      },
      age: {
        title: 'Date',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              {
                value: 'jacob',
                title: 'jacob'
              },
              {
                value: 'hcglwjlwcgwwcgwcwj',
                title: 'hcglwjlwcgwwcgwcwj'
              },
              {
                value: 'Yassin',
                title: 'Yassin'
              },
              {
                value: 'Yass',
                title: 'Yass'
              },
              {
                value: 'Ann',
                title: 'Ann'
              },
              {
                value: 'TOTO',
                title: 'TOTO'
              },
              {
                value: 'Med',
                title: 'Med'
              },
              {
                value: 'BEn',
                title: 'BEn'
              },
              {
                value: 'mohammed benyakoub',
                title: 'mohammed benyakoub'
              },
              {
                value: 'SELLAMI',
                title: 'SELLAMI'
              },
              {
                value: 'talaL',
                title: 'talaL'
              },
              {
                value: '<b>Samantha</b>',
                title: 'Samantha'
              }
            ]
          }
        }
      },
      passed: {
        title: 'Passed',
        filter: {
          type: 'checkbox',
          config: {
            true: 'Yes',
            false: 'No',
            resetText: 'clear'
          }
        }
      }
    }
  }
