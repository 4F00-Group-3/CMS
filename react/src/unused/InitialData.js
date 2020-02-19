const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'take out the garbage' },
        'task-2': { id: 'task-2', content: 'watch tv' },
        'task-3': { id: 'task-3', content: 'eat an orange' },
        'task-4': { id: 'task-4', content: 'cook dinner' },
        'task-5': { id: 'task-5', content: 'charge my phone' },
    },
    columns: {
        'column-1': {
            id: 'column-1-id',
            title: 'to-do',
            taskIDs: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5']
        },
    },

    //facilitate column reordering
    columnOrder: ['column-1'],
}

export default initialData;