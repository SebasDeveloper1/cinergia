export const savePreviusPath = ({ path }: { path: string }) => {
  sessionStorage.setItem('previusPath', path);
};
