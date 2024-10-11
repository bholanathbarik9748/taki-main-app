export const globalFormHandler = (id, value, setFormData, setError) => {
  setFormData(prev => ({...prev, [id]: value}));
  setError(prev => ({...prev, [id]: false}));
};
