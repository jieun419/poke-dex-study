export function getPoketmonDataApi(apiUrl: string) {
   // console.log(apiUrl)
  return fetch(`${apiUrl}`)
    .then((res: Response) => res.json());
}
