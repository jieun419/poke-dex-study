  export function getPoketDetailApi(detailUrl: string) {
    return fetch(`${detailUrl}`)
      .then((res: Response) => res.json());
  }
  