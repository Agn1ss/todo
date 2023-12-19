export const generateTodos = (n = 20) => {
  const todos = [];
  for (let i = 0; i < n; i++) todos.push(generateTodo());

  return todos;
};

const generateTodo = () => ({
  id: Date.now() + getRandomString(),
  name: getRandomString(),
  time: Date.now(),
  solved: Math.random() > 0.5
});

export function getRandomString() {
  return Math.random().toString(36).substring(2);
}
