/**
 * Getting data from URL via fetch
 * Here we are mentioning <T> as the Generic data type and this will be returned
 * in the Promise response.
 * 
 * generics are composoable type or parameterised types 
 * it's a way for you to get extensibility or power out of your typescript
 * 
 * 
 * @param url
 * @returns
 */
export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
