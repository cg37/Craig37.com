/**
 * 并发请求
 * @param {string[]} urls 待请求的url数组
 * @param {number} maxNum 最大并发数
 */

function concurRequest(urls: string[], maxNum: number):Promise<(Response | Error)[]> {
  return new Promise(resolve=> {
    if (urls.length === 0) {
      resolve([])
      return
    }
    const results:(Response | Error)[] = [];
    let index = 0; //下一个请求的下标
    let count = 0
    async function request() {
      if (index === urls.length) {
        return
      }
      const idx = index

      const url = urls[index];
      index++;
      try {
        const resp = await fetch(url)
        results[idx] = resp;
      }
      catch(err: any) {
        results[idx] = err;
      }
      finally{
        request();
        count++;
        if(count === urls.length) {
          resolve(results)
        }
      }
    }
    const times = Math.min(maxNum, urls.length)
    for(let i = 0; i < times; i++) {
      request()
    }
  })
}
