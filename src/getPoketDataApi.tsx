export function getPoketmonDataApi(apiUrl: string) {
  return fetch(`${apiUrl}`)
    .then((res: Response) => res.json());
}
