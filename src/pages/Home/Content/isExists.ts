export const isExists = (id: number, size: string, state: any) => {
  for (let i = 0; i < state.length; ++i) {
    if (state[i].id === id && state[i].size === size) {
      return true;
    }
  }
  return false;
};
