import {creatChunk} from './creatChunk.js'
onmessage = async(e) => {
  const {
    file,
    CHUNK_SIZE,
    startChunkIndex: start,
    endChunkIndex: end,
  } = e.data;
  console.log(file, CHUNK_SIZE, start, end);
  const promiseArr = [];
  for (let i = start; i < end; i++) {
    promiseArr.push(creatChunk(file, i , CHUNK_SIZE));
  }
  const chunks = await Promise.all(promiseArr)
  postMessage(chunks);
}