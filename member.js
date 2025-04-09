function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'object',
    title: 'Skills Member',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'role',
        type: 'string',
        title: 'Role'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      }
    ]
  }
}