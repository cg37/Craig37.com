import SparkMD5 from "spark-md5";
export function creatChunk(file, index, chunkSize){
  return new Promise((resolve) => {
    const start = index + chunkSize
    const end = start + chunkSize;
    const spark = new SparkMD5.ArrayBuffer();
    const fileReader = new FileReader();
    const blob = file.slice(start, end);
    fileReader.onload = (e) => {
      console.log(e.target);
      spark.append(e.target.res);
      resolve({
        start,
        end,
        index,
        hash: spark?.end(),
        blob,
      })
    }
    fileReader.readAsArrayBuffer(blob);
  })
}