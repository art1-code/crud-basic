import bcrypt from 'bcrypt';

export const criptografia = (senha) => {
  const hash =  bcrypt.hashSync(senha, 10);
  return hash;
};