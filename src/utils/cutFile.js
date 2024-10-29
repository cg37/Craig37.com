const CHUNK_SIZE = 1024 * 1024 * 2
const THREAD_COUNT = navigator.hardwareConcurrency || 4;
let finishCount = 0

export function cutFile(file) {
  return new Promise ((resolve) => {
    const chunkCount = Math.ceil(file.size / CHUNK_SIZE);
    const threadChunkCount = Math.ceil(chunkCount / THREAD_COUNT);
    const res = [];
    for (let i = 0; i < chunkCount; i++) {
    //创建一个线程并分配任务
      const worker = new Worker('.worker.js', {
        type: 'module'
      })
      const start = i * threadChunkCount;
      let end = (i + 1) *threadChunkCount;
      if (end > chunkCount) {
        end = chunkCount
      }
      worker.postMessage({
        file,
        CHUNK_SIZE,
        startChunkIndex: start,
        endChunkIndex: end,
      })
      worker.onmessage = (e) => {
        for (let i = start; i < end; i++) {
          res[i] = e.data[i-start];
        }
      }
      worker.terminate();
      finishCount++
      if (finishCount === THREAD_COUNT) {
        resolve(res)
      }
    }
  })
}