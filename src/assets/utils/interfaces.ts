interface RootObject {
  add: Add;
  edit: Edit;
  delete: {
      deleteButtonContent: string;
      confirmDelete: string;
  };
  selectMode: string;
  columns: Columns;
}
interface Add {
  addButtonContent: string;
  createButtonContent: string;
  cancelButtonContent: string;
  confirmCreate: string;
}
interface Edit {
  editButtonContent: string;
  saveButtonContent: string;
  cancelButtonContent: string;
  confirmSave: string;
}
interface Columns {
  id: Id;
  firstName: FirstName;
  lastName: LastName;
  username: Username;
  email: Email;
  age: Age;
  passed: Passed;
}
interface Id {
  title: string;
  editable: string;
  addable: string;
  type: string;
  notShownField: string;
}
interface FirstName {
  title: string;
  type: string;
  filter: Filter;
  notShownField: string;
}
interface Filter {
  type: string;
  config: Config;
}
interface Config {
  selectText?: string;
  list?: ListItem[];
  completer?: Completer;
  'true'?: string;
  'false'?: string;
  resetText?: string;
}
interface ListItem {
  value: string;
  title: string;
}
interface LastName {
  title: string;
  type: string;
}
interface Username {
  title: string;
  type: string;
}
interface Email {
  title: string;
  type: string;
  filter: Filter;
  editor: Editor;
}
interface Completer {
  data: string;
  searchFields: string;
  titleField: string;
}
interface Editor {
  type: string;
  value?: string;
  config?: Config;
}
interface Age {
  title: string;
  type: string;
  editor: Editor;
}
interface Passed {
  title: string;
  filter: Filter;
}
