const users = [
  { id: 1, name: "John Doe", isAdmin: true },
  { id: 2, name: "Jane Doe", isAdmin: false },
  { id: 3, name: "Jim Doe", isAdmin: false },
];

export const normalRepository = {
  getUsers: async () => {
    return users;
  },
};

//comment
export default normalRepository;
