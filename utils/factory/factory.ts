export const createEmployee = ({ firstName, lastName, email }: {
  firstName: string
  lastName: string
  email: string
}) => ({
  id: Math.ceil(Math.random() * 100),
  firstName,
  lastName,
  email,
  fullName: `${firstName} ${lastName}`
})
