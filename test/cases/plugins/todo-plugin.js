export default {
  name: 'todo-plugin',
  rules: [
    {
      name: 'todo-checkbox',
      pattern: /^TODO:\s*(.+)$/,
      transform: (match) => `- [ ] ${match[1]}`,
    },
  ],
}
